
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#fdfdfd] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-6">
                Now open for 2026 academic year
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-serif leading-tight">
                Empowering <span className="text-emerald-700">African Reading</span> Communities
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
                CloudBook Club is a specialized digital platform for Nigerian students and educators. Engage in structured discourse, track academic progress, and celebrate our continent's rich literary heritage.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-sm">
                  Join the Community
                </Link>
                <Link to="/clubs" className="flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all">
                  Explore Circles
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000"
                  alt="Students studying literature"
                />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-800 font-serif">500+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Book Clubs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-800 font-serif">12k+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Active Readers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-800 font-serif">Nigeria</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Primary Focus</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-800 font-serif">4.9/5</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Genres Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Literary Focus</h2>
            <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Curating discussions around the most significant voices in African history and contemporary thought.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Nigerian Classics', desc: 'From Achebe to Soyinka, exploring the foundation of our literary identity.', icon: '🏛️' },
              { title: 'Modern Pan-Africanism', desc: 'Contemporary voices defining the new African narrative across borders.', icon: '🌍' },
              { title: 'Academic Research', desc: 'Dedicated spaces for scholars and students to perform deep textual analysis.', icon: '🎓' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">Designed for Deep Reading</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Collaborative Selection</h4>
                    <p className="mt-1 text-gray-600 text-sm">Vote on upcoming cycles to ensure the community reads what matters most.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Synchronized Reading</h4>
                    <p className="mt-1 text-gray-600 text-sm">Track progress together with visual bars and chapter-by-chapter milestones.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Moderated Excellence</h4>
                    <p className="mt-1 text-gray-600 text-sm">Admins manage memberships and facilitate high-quality academic discussions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/read1/400/400" className="rounded-2xl shadow-sm" alt="Reading 1" />
                <img src="https://picsum.photos/seed/read2/400/400" className="rounded-2xl shadow-sm mt-8" alt="Reading 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-emerald-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white font-serif mb-6">Ready to expand your literary horizon?</h2>
          <p className="text-emerald-100 text-lg mb-10 leading-relaxed">
            Join thousands of Nigerian scholars and book enthusiasts. Registration takes less than two minutes.
          </p>
          <Link to="/register" className="inline-block bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-xl">
            Create Your Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
