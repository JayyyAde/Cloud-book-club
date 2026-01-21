
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CLUBS } from '../constants';
import { useAuth } from '../App';

const ClubListPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClubs = MOCK_CLUBS.filter(club => 
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.focus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Explore Book Clubs</h1>
          <p className="text-gray-600">Find your community of readers.</p>
        </div>
        {isAuthenticated && (
          <button className="mt-4 md:mt-0 bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-800 transition">
            Create New Club
          </button>
        )}
      </div>

      <div className="mb-8">
        <div className="relative max-w-md">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Search by name or focus..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map(club => (
          <div key={club.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="h-32 bg-emerald-100 flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                {club.isPrivate && (
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Private</span>
                )}
              </div>
              <p className="text-emerald-700 text-sm font-semibold mb-3">{club.focus}</p>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{club.description}</p>
              <div className="flex items-center text-xs text-gray-400 space-x-4">
                <span className="flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                  {club.members.length} Members
                </span>
                <span>Established 2026</span>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link to={`/clubs/${club.id}`} className="block w-full text-center bg-gray-50 border border-gray-200 text-emerald-800 py-2 rounded-lg font-medium hover:bg-emerald-50 transition">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubListPage;
