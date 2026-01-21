
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_CLUBS, MOCK_BOOKS } from '../constants';
import { useAuth } from '../App';

const ClubDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'books'>('overview');
  
  const club = MOCK_CLUBS.find(c => c.id === id);
  if (!club) return <div className="p-8 text-center">Club not found.</div>;

  const isAdmin = user?.id === club.adminId;
  const isMember = user ? club.members.includes(user.id) : false;
  const currentBook = MOCK_BOOKS.find(b => b.id === club.currentBookId);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="bg-emerald-800 h-48 relative">
          <div className="absolute -bottom-12 left-8 flex items-end space-x-6">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg border-4 border-white flex items-center justify-center text-5xl">
              🏘️
            </div>
            <div className="pb-4 text-white">
              <h1 className="text-3xl font-bold font-serif">{club.name}</h1>
              <p className="text-emerald-100">{club.focus}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-8 space-x-2">
            {!isMember ? (
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-emerald-600 transition">
                Join Club
              </button>
            ) : isAdmin ? (
              <Link to={`/clubs/${id}/admin`} className="bg-white text-emerald-900 px-6 py-2 rounded-lg font-bold shadow hover:bg-gray-100 transition inline-block">
                Manage Club
              </Link>
            ) : (
              <button className="bg-emerald-700/50 text-white px-6 py-2 rounded-lg font-bold backdrop-blur-sm">
                Member
              </button>
            )}
          </div>
        </div>
        <div className="pt-16 px-8 pb-4">
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-4 text-sm font-medium ${activeTab === 'overview' ? 'border-b-2 border-emerald-600 text-emerald-700' : 'text-gray-500'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`pb-3 px-4 text-sm font-medium ${activeTab === 'members' ? 'border-b-2 border-emerald-600 text-emerald-700' : 'text-gray-500'}`}
            >
              Members ({club.members.length})
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`pb-3 px-4 text-sm font-medium ${activeTab === 'books' ? 'border-b-2 border-emerald-600 text-emerald-700' : 'text-gray-500'}`}
            >
              Reading History
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Club</h2>
                <p className="text-gray-600 leading-relaxed">{club.description}</p>
              </section>

              {currentBook && (
                <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Current Reading Cycle</h2>
                    <span className="text-sm text-gray-400">Ends {club.readingCycleEnd}</span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8">
                    <img src={currentBook.coverImage} className="w-40 rounded shadow-md" alt="" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{currentBook.title}</h3>
                      <p className="text-emerald-700 font-medium mb-4">{currentBook.author}</p>
                      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{currentBook.description}</p>
                      <Link
                        to={`/clubs/${id}/discussion/${currentBook.id}`}
                        className="inline-block bg-emerald-50 text-emerald-700 px-6 py-2 rounded-lg font-bold hover:bg-emerald-100 transition"
                      >
                        Join the Discussion
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Club Members</h2>
              <div className="divide-y divide-gray-100">
                {club.members.map((mid, idx) => (
                  <div key={idx} className="py-4 flex items-center space-x-4">
                    <img src={`https://i.pravatar.cc/150?u=${mid}`} className="w-10 h-10 rounded-full" alt="" />
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">Member {idx + 1}</p>
                      <p className="text-xs text-gray-400">Joined Jan 2026</p>
                    </div>
                    {mid === club.adminId && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Admin</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'books' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MOCK_BOOKS.map(book => (
                <div key={book.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-4">
                  <img src={book.coverImage} className="w-20 rounded" alt="" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{book.title}</h3>
                    <p className="text-xs text-gray-500">{book.author}</p>
                    <span className="inline-block mt-2 text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded">Completed March 2026</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">
          <section className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-lg font-bold text-emerald-900 mb-4">Reading Timeline</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600"></div>
                <div>
                  <p className="text-sm font-bold text-emerald-900">Chapters 1-5 Discussion</p>
                  <p className="text-xs text-emerald-700">Completed May 1st, 2026</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-600"></div>
                <div>
                  <p className="text-sm font-bold text-emerald-900">Mid-point Analysis</p>
                  <p className="text-xs text-emerald-700">Completed May 8th, 2026</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-300"></div>
                <div>
                  <p className="text-sm font-bold text-gray-600">Final Wrap-up</p>
                  <p className="text-xs text-gray-400">Due May 15th, 2026</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Votes</h3>
            <p className="text-sm text-gray-500 mb-4">Nominate the next book for our June reading cycle.</p>
            <button className="w-full bg-emerald-700 text-white py-2 rounded-lg text-sm font-bold hover:bg-emerald-800 transition">
              Nominate a Book
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClubDetailPage;
