import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function Navbar({ onThemeToggle, mode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/60 backdrop-blur-md shadow-sm glass">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="text-lg font-bold tracking-wide text-brand-dark">Yash Portfolio</div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-dark transition-colors duration-200">
              {link.name}
            </a>
          ))}

          <button
            className="rounded-lg border border-brand-dark/30 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-dark transition hover:bg-brand-light"
            onClick={onThemeToggle}
          >
            {mode === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-brand-dark ring-1 ring-brand-dark/10 md:hidden"
          aria-label="Open mobile menu"
        >
          <span className="text-2xl">☰</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/70 backdrop-blur-md">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-brand-light/30"
              >
                {link.name}
              </a>
            ))}
            <button
              className="rounded-lg border border-brand-dark/30 bg-white px-3 py-2 text-sm font-semibold text-brand-dark"
              onClick={() => {
                onThemeToggle();
                setOpen(false);
              }}
            >
              {mode === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
