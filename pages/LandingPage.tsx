
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION 1: HERO (Creamy Soft White) */}
      <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-40 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 mb-10 tracking-[0.2em] uppercase border border-emerald-100/50">
                Active 2026 Academic Session
              </span>
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-7xl lg:text-6xl xl:text-7xl font-serif leading-[1.1]">
                Empowering <br />
                <span className="text-emerald-700">African Reading</span> <br /> 
                Communities
              </h1>
              <p className="mt-10 text-xl text-gray-500 sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed font-medium">
                CloudBook Club is the premier 2026 digital ecosystem for Nigerian scholars and bibliophiles. We facilitate deep analysis within a secure cloud architecture.
              </p>
              <div className="mt-12 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/register" className="flex items-center justify-center px-10 py-5 border border-transparent text-base font-bold rounded-2xl text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-xl hover:-translate-y-1">
                  Start Your Journey
                </Link>
                <Link to="/clubs" className="flex items-center justify-center px-10 py-5 border border-gray-200 text-base font-bold rounded-2xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm">
                  Browse Circles
                </Link>
              </div>
            </div>
            <div className="mt-20 lg:mt-0 lg:col-span-6">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-[12px] border-white ring-1 ring-gray-100">
                <img
                  className="w-full h-[450px] lg:h-[600px] object-cover"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000"
                  alt="Scholars discussing literature"
                />
                <div className="absolute inset-0 bg-emerald-900/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: METRICS (Pure White with Dividers) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            <div className="space-y-2 border-l-2 border-emerald-50 pl-6">
              <p className="text-5xl font-bold text-emerald-950 font-serif">500+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Clubs Established</p>
            </div>
            <div className="space-y-2 border-l-2 border-emerald-50 pl-6">
              <p className="text-5xl font-bold text-emerald-950 font-serif">15k+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Active Members</p>
            </div>
            <div className="space-y-2 border-l-2 border-emerald-50 pl-6">
              <p className="text-5xl font-bold text-emerald-950 font-serif">Nigeria</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Primary Literary Hub</p>
            </div>
            <div className="space-y-2 border-l-2 border-emerald-50 pl-6">
              <p className="text-5xl font-bold text-emerald-950 font-serif">2026</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Active Session</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY (Ultra Soft Gray) */}
      <section className="py-32 bg-[#f8f9fa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold text-emerald-700 uppercase tracking-[0.4em] mb-6">Foundations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">The Three Literary Pillars</h3>
            <div className="mt-8 h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: 'Academic Focus', desc: 'Curated environments for scholars to perform deep dives into theory and contemporary narratives.', icon: '🏛️' },
              { title: 'Cultural Identity', desc: 'Prioritizing Nigerian classics that define the modern Pan-African identity in 2026.', icon: '🌍' },
              { title: 'Digital Fluency', desc: 'A cloud-first interface ensuring your literary progress is synchronized across all devices.', icon: '☁️' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-10">{item.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-5 font-serif">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DEEP READING (Pure White) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-32 items-center">
            <div className="relative mb-24 lg:mb-0">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl opacity-60"></div>
              <img src="https://picsum.photos/seed/library2026/800/600" className="relative rounded-[3rem] shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700" alt="Academic Study" />
              <div className="absolute -bottom-10 -right-10 bg-emerald-950 text-white p-10 rounded-[2rem] shadow-2xl z-20 hidden md:block border-4 border-white">
                <p className="text-4xl font-bold font-serif mb-2">100%</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300 font-bold">2026 User Retention</p>
              </div>
            </div>
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-gray-900 font-serif mb-4 leading-tight">Structured for the Professional Academic</h2>
              <div className="space-y-12">
                <div className="flex group">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300 shadow-sm">1</div>
                  <div className="ml-8">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Sync Progress Mapping</h5>
                    <p className="text-gray-500 text-base leading-relaxed">Visual milestones and page-by-page cataloging help readers maintain a consistent 2026 study pace.</p>
                  </div>
                </div>
                <div className="flex group">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300 shadow-sm">2</div>
                  <div className="ml-8">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Elite Governance</h5>
                    <p className="text-gray-500 text-base leading-relaxed">Advanced tools for club creators to facilitate high-level academic discourse and manage elite memberships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA (Deep Emerald) */}
      <section className="py-32 bg-emerald-950 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 border-2 border-emerald-100 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-120 h-120 border-2 border-emerald-100 rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-10 leading-tight">Begin Your 2026 <br /> Academic Journey</h2>
          <p className="text-emerald-100 text-xl mb-14 font-medium opacity-90 leading-relaxed">
            Register now to secure your spot in a specialized reading circle for the upcoming semester.
          </p>
          <Link to="/register" className="inline-block bg-white text-emerald-950 px-14 py-6 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95">
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
