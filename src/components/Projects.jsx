const projects = [
  {
    title: 'SportEvo',
    description: 'Sports court booking platform with AI features for smart availability and dynamic pricing.',
    link: 'https://play-pal-five.vercel.app/'
  },
  {
    title: 'Svgu Library',
    description: 'It automates the manual process of 2-3 days into minutes and make the work smooth and fast',
    link: 'https://svgu-library.vercel.app/'
  },
    {
    title: 'Quick Stay',
    description: ' Luxury Hotel Booking UI A modern and responsive hotel booking web app UI built with React and Tailwind CSS. ',
    link: 'https://quick-stay-s.vercel.app/'
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-sm text-slate-600">A few highlights from my recent work.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="glass rounded-2xl border border-white/30 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
            <a
              href={project.link}
              className="mt-5 inline-flex rounded-md border border-brand px-4 py-2 text-sm font-medium text-brand-dark transition hover:bg-brand-light hover:text-brand-dark"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
