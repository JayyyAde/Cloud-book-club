
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-28 lg:pb-32 bg-[#fdfdfd] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="sm:text-center lg:text-left lg:col-span-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 mb-8 tracking-wide uppercase border border-emerald-100">
                2026 Academic Session Active
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl font-serif leading-tight">
                Empowering <span className="text-emerald-700">African Reading</span> <br className="hidden lg:block" /> Communities
              </h1>
              <p className="mt-8 text-lg text-gray-500 sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
                CloudBook Club is a premium digital ecosystem for Nigerian scholars and bibliophiles. We facilitate structured literary analysis and progress tracking within a secure cloud-ready architecture.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-emerald-800 hover:bg-emerald-900 transition-all shadow-md">
                  Join Now
                </Link>
                <Link to="/clubs" className="flex items-center justify-center px-10 py-4 border border-gray-200 text-base font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm">
                  Browse Clubs
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1000"
                  alt="Students studying literature"
                />
                <div className="absolute inset-0 bg-emerald-900/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-1">
              <p className="text-4xl font-bold text-emerald-900 font-serif">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Clubs Formed</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-emerald-900 font-serif">15k+</p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Active Members</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-emerald-900 font-serif">Nigeria</p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Primary Hub</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-emerald-900 font-serif">2026</p>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Session Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Area Section */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-[0.3em] mb-4">Core Philosophy</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Our Literary Pillars</h3>
            <div className="mt-6 h-1.5 w-16 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Academic Rigor', desc: 'Spaces designed for scholars to perform deep dives into post-colonial theory and modern narratives.', icon: '🏛️' },
              { title: 'Cultural Heritage', desc: 'Prioritizing Nigerian classics and emerging voices that define the Pan-African identity.', icon: '🌍' },
              { title: 'Digital Innovation', desc: 'A cloud-first approach to reading, ensuring your discussions and progress are always accessible.', icon: '☁️' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mb-8">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Reading Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative mb-16 lg:mb-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
              <img src="https://picsum.photos/seed/focus/800/600" className="relative rounded-3xl shadow-xl z-10" alt="Focus" />
              <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-8 rounded-2xl shadow-lg z-20 hidden md:block">
                <p className="text-2xl font-bold font-serif mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-300">User Growth in 2026</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-serif mb-8 leading-tight">Structured for the Modern Academic</h2>
              <ul className="space-y-10">
                <li className="flex group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">1</div>
                  <div className="ml-6">
                    <h5 className="text-lg font-bold text-gray-900 mb-2">Progress Mapping</h5>
                    <p className="text-gray-500 text-sm">Visual markers and page-by-page tracking help you stay on course with your reading schedule.</p>
                  </div>
                </li>
                <li className="flex group">
                  <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">2</div>
                  <div className="ml-6">
                    <h5 className="text-lg font-bold text-gray-900 mb-2">Member Governance</h5>
                    <p className="text-gray-500 text-sm">Club creators have powerful tools to moderate content and manage member participation effectively.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-8">Begin Your Academic Journey Today</h2>
          <p className="text-emerald-100 text-lg mb-12 font-medium opacity-90">
            Secure your spot in a specialized 2026 reading circle. Connect with fellow Nigerian intellectuals and redefine your reading experience.
          </p>
          <Link to="/register" className="inline-block bg-white text-emerald-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-2xl active:scale-95">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
