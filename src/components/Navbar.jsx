import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function Navbar({ onThemeToggle, mode }) {
  const [open, setOpen] = useState(false);

  const isDark = mode === 'dark';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b ${isDark ? 'border-slate-700/50 bg-slate-900/80' : 'border-white/30 bg-white/60'} backdrop-blur-md shadow-sm glass`}>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className={`text-lg font-bold tracking-wide ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>Yash Portfolio</div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors duration-200 ${isDark ? 'text-slate-300 hover:text-brand-light' : 'text-slate-700 hover:text-brand-dark'}`}>
              {link.name}
            </a>
          ))}

          <button
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition hover:scale-105 ${isDark ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700' : 'border-brand-dark/30 bg-white/80 text-brand-dark hover:bg-brand-light'}`}
            onClick={onThemeToggle}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 ring-1 md:hidden ${isDark ? 'text-slate-300 ring-slate-600' : 'text-brand-dark ring-brand-dark/10'}`}
          aria-label="Open mobile menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {open && (
        <div className={`md:hidden border-t ${isDark ? 'border-slate-700/50 bg-slate-800/90' : 'border-white/20 bg-white/70'} backdrop-blur-md`}>
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-700/50' : 'text-slate-700 hover:bg-brand-light/30'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              className={`rounded-lg border px-3 py-2 text-sm font-semibold transition hover:scale-105 ${isDark ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700' : 'border-brand-dark/30 bg-white text-brand-dark hover:bg-brand-light'}`}
              onClick={() => {
                onThemeToggle();
                setOpen(false);
              }}
            >
              {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
