
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BOOKS, MOCK_CLUBS } from '../constants';
import { useAuth } from '../App';
import { DiscussionPost } from '../types';
import { summarizeDiscussion } from '../services/geminiService';

const DiscussionPage: React.FC = () => {
  const { id, bookId } = useParams<{ id: string, bookId: string }>();
  const { user } = useAuth();
  const [posts, setPosts] = useState<DiscussionPost[]>([]);
  const [newPost, setNewPost] = useState('');
  const [summary, setSummary] = useState<string | null>(null);
  const [summarizing, setSummarizing] = useState(false);

  const book = MOCK_BOOKS.find(b => b.id === bookId);
  const club = MOCK_CLUBS.find(c => c.id === id);

  useEffect(() => {
    // Mock initial discussion
    setPosts([
      {
        id: 'p1',
        clubId: id!,
        bookId: bookId!,
        userId: 'u2',
        userName: 'Chidi Okoro',
        content: `I find the representation of traditional customs in the first few chapters quite fascinating. How does Achebe use proverbs to establish the cultural context?`,
        timestamp: '2 hours ago',
        replies: [
          {
            id: 'r1',
            userId: 'u1',
            userName: 'Amaka Obi',
            content: 'Great point, Chidi. The proverbs acting as "the palm-oil with which words are eaten" really sets the tone for the entire narrative strategy.',
            timestamp: '1 hour ago'
          }
        ]
      },
      {
        id: 'p2',
        clubId: id!,
        bookId: bookId!,
        userId: 'u3',
        userName: 'Femi Ade',
        content: `Does Okonkwo's fear of appearing weak actually make him weaker in the eyes of the community?`,
        timestamp: '30 mins ago',
        replies: []
      }
    ]);
  }, [id, bookId]);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim() || !user) return;

    const post: DiscussionPost = {
      id: Date.now().toString(),
      clubId: id!,
      bookId: bookId!,
      userId: user.id,
      userName: user.name,
      content: newPost,
      timestamp: 'Just now',
      replies: []
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleSummarize = async () => {
    setSummarizing(true);
    const contentList = posts.map(p => `${p.userName}: ${p.content}`);
    const sum = await summarizeDiscussion(contentList);
    setSummary(sum);
    setSummarizing(false);
  };

  if (!book || !club) return <div className="p-8 text-center">Not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <nav className="mb-6 flex items-center text-sm text-gray-500">
        <Link to={`/clubs/${id}`} className="hover:text-emerald-700">{club.name}</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-900">Discussion: {book.title}</span>
      </nav>

      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src={book.coverImage} className="w-16 h-24 object-cover rounded shadow" alt="" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-serif">{book.title}</h1>
            <p className="text-gray-500">Structured Analysis & Academic Forum</p>
          </div>
        </div>
        <button
          onClick={handleSummarize}
          disabled={summarizing}
          className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-bold border border-emerald-100 hover:bg-emerald-100 disabled:opacity-50"
        >
          {summarizing ? 'Analyzing...' : 'AI Summary'}
        </button>
      </header>

      {summary && (
        <div className="mb-8 bg-emerald-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <button onClick={() => setSummary(null)} className="text-emerald-300 hover:text-white">✕</button>
          </div>
          <h3 className="text-lg font-bold mb-2 font-serif">Gemini Discussion Insights</h3>
          <div className="text-sm prose prose-invert max-w-none">
            {summary.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
        </div>
      )}

      <section className="mb-12">
        <form onSubmit={handlePostSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <label className="block text-sm font-bold text-gray-700 mb-2">Start a new thread</label>
          <textarea
            className="w-full border-gray-200 rounded-lg p-4 text-sm focus:ring-emerald-500 focus:border-emerald-500 min-h-[100px]"
            placeholder="Share your analysis or ask a question..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <button type="submit" className="bg-emerald-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-800 transition">
              Post Thought
            </button>
          </div>
        </form>

        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={`https://i.pravatar.cc/150?u=${post.userId}`} className="w-8 h-8 rounded-full" alt="" />
                  <div>
                    <span className="font-bold text-gray-900">{post.userName}</span>
                    <span className="ml-2 text-xs text-gray-400">{post.timestamp}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{post.content}</p>
              </div>

              {post.replies.length > 0 && (
                <div className="bg-slate-50 border-t border-gray-100 p-6 space-y-4">
                  {post.replies.map(reply => (
                    <div key={reply.id} className="flex space-x-3">
                      <img src={`https://i.pravatar.cc/150?u=${reply.userId}`} className="w-6 h-6 rounded-full" alt="" />
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-900">{reply.userName} <span className="ml-2 font-normal text-gray-400">{reply.timestamp}</span></p>
                        <p className="text-xs text-gray-600 mt-1">{reply.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-white border-t border-gray-100 px-6 py-3">
                <button className="text-xs font-bold text-emerald-700 hover:underline">Reply to Thread</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DiscussionPage;
