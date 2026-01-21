
import React from 'react';
import { useAuth } from '../App';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-emerald-900 h-32"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6">
            <img src={user?.avatar} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" alt="" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-serif">{user?.name}</h1>
              <p className="text-gray-500">{user?.email}</p>
            </div>
            <button className="mt-4 md:mt-0 bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50">
              Edit Profile
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {user?.bio || "No bio added yet."}
              </p>
              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Member Since</h3>
                <p className="text-gray-700">{user?.joinedDate}</p>
              </div>
            </section>

            <section className="bg-emerald-50 rounded-xl p-6">
              <h2 className="text-lg font-bold text-emerald-900 mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {['African Classics', 'Historical Fiction', 'Yoruba Folklore', 'Post-colonial Studies'].map(tag => (
                  <span key={tag} className="bg-white border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-bold text-emerald-800 mb-2">Reading Goal 2026</h3>
                <div className="flex justify-between text-xs mb-1">
                  <span>12 / 24 Books</span>
                  <span className="font-bold text-emerald-700">50%</span>
                </div>
                <div className="w-full bg-emerald-200/50 rounded-full h-2">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
