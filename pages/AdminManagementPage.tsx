
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CLUBS } from '../constants';
import { useAuth } from '../App';

const AdminManagementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const club = MOCK_CLUBS.find(c => c.id === id);

  if (!club || user?.id !== club.adminId) {
    return <div className="p-8 text-center">Access Denied.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Club Management</h1>
          <p className="text-gray-500">Admin dashboard for {club.name}</p>
        </div>
        <button
          onClick={() => navigate(`/clubs/${id}`)}
          className="text-emerald-700 font-bold text-sm hover:underline"
        >
          &larr; Back to Club
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Pending Join Requests</h2>
            <div className="space-y-4">
              {club.pendingRequests.length > 0 ? (
                club.pendingRequests.map((rid, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img src={`https://i.pravatar.cc/150?u=${rid}`} className="w-10 h-10 rounded-full" alt="" />
                      <div>
                        <p className="font-bold text-gray-900">User_{rid}</p>
                        <p className="text-xs text-gray-500">Wants to join your club</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-emerald-600 text-white px-4 py-1.5 rounded-md text-sm font-bold hover:bg-emerald-700">Approve</button>
                      <button className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-md text-sm font-bold hover:bg-gray-50">Reject</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm italic">No pending requests at the moment.</p>
              )}
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Discussion Moderation</h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-800 text-sm">
                <p className="font-bold">Recent Report</p>
                <p className="mt-1">Post from @Femi contains inappropriate language. <button className="underline ml-2">Review</button></p>
              </div>
              <p className="text-gray-500 text-sm">Review flagged posts and maintain a respectful academic environment.</p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4">Cycle Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Current Reading Cycle End</label>
                <input type="date" className="w-full border-gray-200 rounded-lg text-sm" defaultValue={club.readingCycleEnd} />
              </div>
              <button className="w-full bg-emerald-700 text-white py-2 rounded-lg text-sm font-bold hover:bg-emerald-800 transition">
                Update Timeline
              </button>
              <button className="w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition">
                Archive Cycle
              </button>
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-red-700">Danger Zone</h2>
            <p className="text-xs text-gray-500 mb-4">Deleting a club is permanent. All discussions will be lost.</p>
            <button className="w-full bg-red-50 text-red-600 border border-red-100 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition">
              Delete Club
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminManagementPage;
