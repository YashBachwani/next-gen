import { useState } from 'react';

const initialState = { name: '', email: '', message: '' };

function Contact({ mode }) {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const isDark = mode === 'dark';

  const validate = () => {
    const newErrors = {};

    if (!formState.name.trim()) newErrors.name = 'Name is required.';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState(initialState);
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl py-16">
      <div className="mb-6">
        <h2 className={`text-3xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Contact</h2>
        <p className={`mt-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Send a message and I'll get back within 24 hours.</p>
      </div>

      <div className={`glass rounded-2xl border p-8 shadow-glow ${isDark ? 'border-slate-700/50 bg-slate-800/40' : 'border-white/30 bg-white/60'}`}>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="relative block">
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className={`w-full rounded-xl border px-3 pt-3 pb-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40 ${isDark ? 'border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400' : 'border-slate-200 bg-white/70 text-slate-900 placeholder-slate-500'}`}
                placeholder="Name"
              />
            </label>
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label className="relative block">
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className={`w-full rounded-xl border px-3 pt-3 pb-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40 ${isDark ? 'border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400' : 'border-slate-200 bg-white/70 text-slate-900 placeholder-slate-500'}`}
                placeholder="Email"
              />
            </label>
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="relative block">
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className={`w-full rounded-xl border px-3 pt-3 pb-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/40 ${isDark ? 'border-slate-600 bg-slate-700/50 text-slate-100 placeholder-slate-400' : 'border-slate-200 bg-white/70 text-slate-900 placeholder-slate-500'}`}
                placeholder="Message"
              ></textarea>
            </label>
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          {status === 'success' && <p className={`rounded-lg p-3 text-sm ${isDark ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'}`}>Message sent successfully!</p>}
          {status === 'error' && <p className={`rounded-lg p-3 text-sm ${isDark ? 'bg-red-900/50 text-red-300' : 'bg-red-100 text-red-800'}`}>Please fix the errors above.</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-brand py-3 font-semibold text-white transition hover:bg-brand-dark hover:shadow-lg disabled:opacity-50"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
