import { useEffect, useState } from 'react';
import yash from "../../images/yash.jpeg"

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative mx-auto w-full max-w-6xl py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className={`glass rounded-3xl border border-white/30 p-8 md:p-12 shadow-glow transition-all duration-700 ${loaded ? 'fade-up' : ''}`}>
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-brand-dark font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-slate-800 to-brand-dark bg-clip-text text-transparent animate-gradient">
                Yash Bachwani
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-slate-600">Full Stack Developer</p>
            </div>

            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl">
              I craft exceptional digital experiences with modern technologies. Passionate about creating
              <span className="text-brand-dark font-medium"> accessible</span>,
              <span className="text-brand-dark font-medium"> scalable</span>, and
              <span className="text-brand-dark font-medium"> user-centered</span> solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-dark">1+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-dark">15+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-dark">100%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
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
                className="group rounded-xl border-2 border-brand bg-white/80 px-8 py-3 font-semibold text-brand-dark shadow-lg transition-all duration-300 hover:scale-105 hover:bg-brand hover:text-white hover:shadow-xl"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="relative">
            <div className="relative mx-auto w-fit animate-float">
              {/* Decorative background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/20 via-cyan-100/30 to-blue-100/20 blur-xl animate-pulse-glow"></div>

              {/* Main avatar container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/90 to-white/70 p-8 shadow-2xl backdrop-blur-sm border border-white/50">
                <div className="relative">
                  <img
                    src={yash}
                    alt="Yash Bachwani"
                    className="mx-auto h-48 w-48 rounded-2xl border-4 border-white shadow-xl object-cover transition-transform duration-300 hover:scale-105 animate-pulse-glow"
                  />
                </div>

                <div className="mt-6 text-center space-y-2">
                  <p className="text-lg font-semibold text-slate-800">Available for Projects</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
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
