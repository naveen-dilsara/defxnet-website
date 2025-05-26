import React, { useState, useEffect } from 'react';
import { ArrowDownCircle, Shield, Brain, Database, FlaskConical, ArrowUpCircle } from 'lucide-react';

export function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToScope = () => {
    document.getElementById('scope')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* Glass panels with neon borders */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-70">
            <div className="absolute top-10 left-10 w-[30rem] h-[30rem] rounded-[3rem] rotate-45 
                          bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl 
                          border border-white/10 shadow-[0_0_15px_rgba(148,163,184,0.1)]
                          animate-float"></div>
            <div className="absolute bottom-20 right-20 w-[35rem] h-[35rem] rounded-[3rem] -rotate-12 
                          bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl 
                          border border-white/10 shadow-[0_0_15px_rgba(148,163,184,0.1)]
                          animate-float-delay"></div>
          </div>
        </div>

        {/* Neon grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTQ3LCA1MSwgMjM0LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 backdrop-blur-xl p-8 rounded-3xl 
                         bg-gradient-to-br from-white/10 to-white/5
                         border border-white/10 shadow-[0_0_25px_rgba(148,163,184,0.1)]">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white 
                           drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]
                           animate-glow">
                DefXNet
        </h1>
              <p className="text-2xl md:text-3xl text-blue-200/90 font-light">
                Securing Medical DL Systems Through Advanced Defense Mechanisms
              </p>
            </div>

            <p className="text-lg text-blue-100/80 leading-relaxed">
              Pioneering research in protecting healthcare machine learning systems from adversarial attacks, 
              ensuring reliable and secure medical image analysis.
        </p>

            <div className="flex flex-wrap gap-4">
          <button
                onClick={scrollToScope}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 
                         backdrop-blur-xl border border-white/10 rounded-full
                         hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-500/20 
                         hover:border-white/20 hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]
                         transition-all duration-300 flex items-center gap-2">
                <span className="text-white font-medium group-hover:text-blue-200">Learn More</span>
                <ArrowDownCircle className="w-5 h-5 text-blue-200 group-hover:text-blue-300" />
          </button>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Enhanced Security Card */}
            <div className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
                           backdrop-blur-xl border border-white/10
                           hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
                           hover:border-white/20 hover:shadow-[0_0_25px_rgba(148,163,184,0.2)]
                           transition-all duration-500">
                <Shield className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Enhanced Security</h3>
                <p className="text-blue-200/70">Advanced protection against adversarial attacks in medical imaging</p>
              </div>
            </div>

            {/* ML Innovation Card */}
            <div className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
                           backdrop-blur-xl border border-white/10
                           hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
                           hover:border-white/20 hover:shadow-[0_0_25px_rgba(148,163,184,0.2)]
                           transition-all duration-500">
                <Brain className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">ML Innovation</h3>
                <p className="text-blue-200/70">State-of-the-art deep learning defense mechanisms</p>
              </div>
            </div>

            {/* Robust Analysis Card */}
            <div className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
                           backdrop-blur-xl border border-white/10
                           hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
                           hover:border-white/20 hover:shadow-[0_0_25px_rgba(148,163,184,0.2)]
                           transition-all duration-500">
                <Database className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Robust Analysis</h3>
                <p className="text-blue-200/70">Comprehensive evaluation of defense strategies</p>
              </div>
            </div>

            {/* Research Impact Card */}
            <div className="group">
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
                           backdrop-blur-xl border border-white/10
                           hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5
                           hover:border-white/20 hover:shadow-[0_0_25px_rgba(148,163,184,0.2)]
                           transition-all duration-500">
                <FlaskConical className="w-10 h-10 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Research Impact</h3>
                <p className="text-blue-200/70">Advancing healthcare security through innovative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToScope}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce
                     hover:text-blue-300 transition-colors cursor-pointer"
        >
          <ArrowDownCircle className="w-8 h-8 text-blue-200/70" />
        </button>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-900/80 hover:bg-blue-900 
                     text-white rounded-full p-3 shadow-lg backdrop-blur-sm
                     transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  );
}