import { useEffect, useState } from 'react';

function Hero({ mode }) {
  const [loaded, setLoaded] = useState(false);
  const isDark = mode === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative mx-auto w-full max-w-6xl py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-brand/5' : 'bg-brand/10'}`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-900/10' : 'bg-cyan-200/20'}`}></div>
      </div>

      <div className={`glass rounded-3xl border p-8 md:p-12 shadow-glow transition-all duration-700 ${loaded ? 'fade-up' : ''} ${isDark ? 'border-slate-700/50 bg-slate-900/40' : 'border-white/30 bg-white/60'}`}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className={`text-sm uppercase tracking-widest font-medium ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>Hello, I'm</p>
              <h1 className={`text-5xl md:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent animate-gradient ${isDark ? 'bg-gradient-to-r from-slate-100 to-brand-light' : 'bg-gradient-to-r from-slate-800 to-brand-dark'}`}>
                Yash Bachwani
              </h1>
              <p className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Full Stack Developer</p>
            </div>

            <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              I craft exceptional digital experiences with modern technologies. Passionate about creating
              <span className={`font-medium ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}> accessible</span>,
              <span className={`font-medium ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}> scalable</span>, and
              <span className={`font-medium ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}> user-centered</span> solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>1+</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>15+</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>100%</div>
                <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/YashBachwani"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-brand to-brand-dark px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/yash-bachwani/"
                className={`group rounded-xl border-2 px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${isDark ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700' : 'border-brand bg-white/80 text-brand-dark hover:bg-brand hover:text-white'}`}
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative">
            <div className="relative mx-auto w-fit animate-float">
              {/* Decorative background */}
              <div className={`absolute -inset-4 rounded-3xl blur-xl animate-pulse-glow ${isDark ? 'bg-gradient-to-br from-brand/10 via-slate-800/30 to-blue-900/20' : 'bg-gradient-to-br from-brand/20 via-cyan-100/30 to-blue-100/20'}`}></div>

              {/* Main avatar container */}
              <div className={`relative rounded-3xl p-8 shadow-2xl backdrop-blur-sm border ${isDark ? 'bg-slate-800/60 border-slate-700/50' : 'bg-gradient-to-br from-white/90 to-white/70 border-white/50'}`}>
                <div className="relative">
                  <img
                    src="/yash.jpeg"
                    alt="Yash Bachwani"
                    className="mx-auto h-48 w-48 rounded-2xl border-4 border-white shadow-xl object-cover transition-transform duration-300 hover:scale-105 animate-pulse-glow"
                  />
                </div>

                <div className="mt-6 text-center space-y-2">
                  <p className={`text-lg font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Available for Projects</p>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Full-stack developer specializing in React, Node.js, and cloud solutions.
                    Let's build something amazing together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
