
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

  const currentBook = MOCK_BOOKS[0];
  const currentProgress = progress.find(p => p.bookId === currentBook.id);
  const percentage = currentProgress ? Math.round((currentProgress.pagesRead / currentBook.totalPages) * 100) : 0;

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-2 tracking-tight">Welcome, {user?.name}</h1>
          <p className="text-gray-500 font-medium">Monitoring your academic progress for the 2026 reading session.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            {/* Active Reading Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-emerald-900 uppercase tracking-widest flex items-center">
                  <span className="w-8 h-px bg-emerald-200 mr-3"></span> Active Pursuit
                </h2>
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8">
                <div className="relative flex-shrink-0">
                  <img src={currentBook.coverImage} className="w-40 h-60 object-cover rounded-2xl shadow-lg border-4 border-gray-50" alt={currentBook.title} />
                  <div className="absolute -top-3 -right-3 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                    2026 CHOICE
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 font-serif leading-tight">{currentBook.title}</h3>
                    <p className="text-emerald-700 font-medium">by {currentBook.author}</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mastery Level</span>
                      <span className="text-emerald-700 font-extrabold text-xl">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-emerald-600 h-3 rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-400 font-medium italic">{currentProgress?.pagesRead} of {currentBook.totalPages} pages cataloged</p>
                  </div>
                  <Link to={`/clubs/c1/discussion/${currentBook.id}`} className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-emerald-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-800 transition-all shadow-sm">
                    Open Seminar Discussion &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Clubs Grid Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-emerald-900 uppercase tracking-widest flex items-center">
                  <span className="w-8 h-px bg-emerald-200 mr-3"></span> Joined Circles
                </h2>
                <Link to="/clubs" className="text-xs font-bold text-emerald-600 hover:text-emerald-800 uppercase tracking-widest">All Clubs</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_CLUBS.map(club => (
                  <Link key={club.id} to={`/clubs/${club.id}`} className="group block p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{club.name}</h3>
                      <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-md font-bold">2026 EST.</span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-6">{club.description}</p>
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider border-t border-gray-50 pt-4">
                      <span className="flex items-center">
                        <svg className="h-3 w-3 mr-1.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z"/></svg>
                        {club.members.length} Members
                      </span>
                      <span>Ends {club.readingCycleEnd}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            {/* AI Guru Section */}
            <section className="bg-emerald-900 text-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-800 rounded-full -mr-12 -mt-12 opacity-50"></div>
              <h2 className="text-xl font-bold mb-6 font-serif flex items-center">
                <span className="mr-3">🧠</span> Gemini AI Insight
              </h2>
              <p className="text-emerald-100 text-sm mb-8 font-medium leading-relaxed italic opacity-80">"Analyzing your current library to suggest the most relevant 2026 African narratives."</p>
              
              {loadingRecs ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-10 bg-emerald-800/50 rounded-lg"></div>
                  <div className="h-10 bg-emerald-800/50 rounded-lg"></div>
                  <div className="h-10 bg-emerald-800/50 rounded-lg"></div>
                </div>
              ) : (
                <ul className="space-y-6">
                  {aiRecs.map((rec, i) => (
                    <li key={i} className="group border-l-2 border-emerald-700 pl-4 py-1 hover:border-emerald-300 transition-all cursor-default">
                      <p className="font-bold text-sm mb-1">{rec.title}</p>
                      <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">{rec.author}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Quick Stats Card */}
            <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-50 pb-4">Personal Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl text-center">
                  <p className="text-2xl font-bold text-emerald-900 font-serif">12</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Volumes</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl text-center">
                  <p className="text-2xl font-bold text-emerald-900 font-serif">04</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Cycles</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-50">
                <div className="flex items-center text-xs text-gray-500 font-medium">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                  System Sync: Just now
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
