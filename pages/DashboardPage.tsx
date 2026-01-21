
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import { MOCK_CLUBS, MOCK_BOOKS } from '../constants';
import { ReadingProgress, Book, BookClub } from '../types';
import { getBookRecommendations } from '../services/geminiService';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ReadingProgress[]>([]);
  const [aiRecs, setAiRecs] = useState<any[]>([]);
  const [loadingRecs, setLoadingRecs] = useState(false);

  useEffect(() => {
    // Initializing mock progress for the current book
    setProgress([{
      userId: user?.id || 'u1',
      bookId: 'b1',
      pagesRead: 145,
      lastUpdated: new Date().toISOString()
    }]);

    const fetchRecs = async () => {
      setLoadingRecs(true);
      const recs = await getBookRecommendations("Nigerian contemporary fiction");
      setAiRecs(recs);
      setLoadingRecs(false);
    };

    fetchRecs();
  }, [user]);

  const currentBook = MOCK_BOOKS[0]; // Simplification for mock
  const currentProgress = progress.find(p => p.bookId === currentBook.id);
  const percentage = currentProgress ? Math.round((currentProgress.pagesRead / currentBook.totalPages) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 font-serif">Hello, {user?.name}</h1>
        <p className="text-gray-600">Here is what is happening in your reading circles today.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Currently Reading */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
              <span className="mr-2">📖</span> Currently Reading
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={currentBook.coverImage} className="w-32 h-48 object-cover rounded shadow" alt={currentBook.title} />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">{currentBook.title}</h3>
                <p className="text-gray-500 mb-4">by {currentBook.author}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-medium">Progress</span>
                    <span className="text-emerald-700 font-bold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{currentProgress?.pagesRead} of {currentBook.totalPages} pages read</p>
                </div>
                <div className="mt-6">
                  <Link to={`/clubs/c1/discussion/${currentBook.id}`} className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800">
                    Go to Discussion &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-emerald-900">Your Book Clubs</h2>
              <Link to="/clubs" className="text-sm text-emerald-600 hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_CLUBS.map(club => (
                <Link key={club.id} to={`/clubs/${club.id}`} className="block p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-900">{club.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">{club.description}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-400">
                    <span className="flex items-center mr-3">
                      <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>
                      {club.members.length} Members
                    </span>
                    <span>Next Meeting: {club.readingCycleEnd}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: AI Recommendations & Stats */}
        <div className="space-y-8">
          <section className="bg-emerald-900 text-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">✨</span> Gemini Book Guru
            </h2>
            <p className="text-emerald-100 text-sm mb-4">Based on your love for Contemporary Fiction, here are some fresh recommendations:</p>
            {loadingRecs ? (
              <div className="animate-pulse space-y-3">
                <div className="h-12 bg-emerald-800 rounded"></div>
                <div className="h-12 bg-emerald-800 rounded"></div>
              </div>
            ) : (
              <ul className="space-y-4">
                {aiRecs.map((rec, i) => (
                  <li key={i} className="border-b border-emerald-800 pb-3 last:border-0">
                    <p className="font-bold text-sm">{rec.title}</p>
                    <p className="text-xs text-emerald-200">by {rec.author}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Reading Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded text-center">
                <p className="text-2xl font-bold text-emerald-700">12</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Books Read</p>
              </div>
              <div className="p-3 bg-slate-50 rounded text-center">
                <p className="text-2xl font-bold text-emerald-700">4</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Active Clubs</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
