import { useState } from "react";

const dev = {
  name: "Yohan Barbosa",
  role: "Full Stack Developer",
  location: "Ocaña, Colombia",
  bio: "I build fast, accessible, and beautifully crafted web products. Passionate about clean architecture, developer experience, and shipping things that matter.",
  email: "ycbarbosam@ufpso.edu.co",
  github: "github.com/yohanbarbosa",
  linkedin: "linkedin.com/in/yohan-camilo-barbosa-mejia-054a73267/",
  avatar: "AR",
  available: true,
  skills: [
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 88, color: "#3178C6" },
    { name: "Node.js", level: 82, color: "#6DA55F" },
    { name: "PostgreSQL", level: 75, color: "#336791" },
    { name: "Docker", level: 70, color: "#2496ED" },
    { name: "AWS", level: 65, color: "#FF9900" },
  ],
  stack: [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "Express", "PostgreSQL", "MongoDB",
    "Docker", "AWS", "Git", "Figma",
  ],
  experience: [
    {
      company: "Fintech Labs",
      role: "Senior Frontend Engineer",
      period: "2022 — Present",
      desc: "Led the redesign of the main dashboard, reducing load time by 40% and improving user retention.",
    },
    {
      company: "Startup Studio",
      role: "Full Stack Developer",
      period: "2020 — 2022",
      desc: "Built 5+ MVPs from scratch for early-stage startups across health, logistics, and edtech.",
    },
    {
      company: "Agency Digital",
      role: "Frontend Developer",
      period: "2018 — 2020",
      desc: "Delivered high-traffic marketing sites and e-commerce solutions for regional brands.",
    },
  ],
  projects: [
    {
      name: "Trackr",
      desc: "Real-time expense tracker with multi-currency support and smart budget alerts.",
      tags: ["Next.js", "Prisma", "Stripe"],
      link: "#",
      emoji: "💸",
    },
    {
      name: "Codebase AI",
      desc: "AI-powered code review tool that integrates directly into GitHub pull requests.",
      tags: ["Python", "OpenAI", "GitHub API"],
      link: "#",
      emoji: "🤖",
    },
    {
      name: "Mapflow",
      desc: "Interactive logistics map platform handling 50k+ daily route calculations.",
      tags: ["React", "Mapbox", "Node.js"],
      link: "#",
      emoji: "🗺️",
    },
    {
      name: "Healio",
      desc: "Telemedicine scheduling app used by 12 clinics across Colombia.",
      tags: ["React Native", "Firebase", "Twilio"],
      link: "#",
      emoji: "🏥",
    },
  ],
};

type InterfaceProps = {
  number : string | number,
  title : string
}

const NAV = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function App() {
  const [active, setActive] = useState("About");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-400">
            <span className="text-indigo-400">@</span>yohanBarbosa
          </span>
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n}>
                <button
                  onClick={() => setActive(n)}
                  className={`px-3 py-1.5 text-xs rounded transition-all ${
                    active === n
                      ? "bg-indigo-500/20 text-indigo-300"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-24">

        {/* HERO */}
        <section id="about">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-3xl font-bold text-indigo-300">
                {dev.avatar}
              </div>
              {dev.available && (
                <span className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to work
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-indigo-400 mb-1 tracking-widest uppercase">
                  {dev.role}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  {dev.name}
                </h1>
                <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  {dev.location}
                </p>
              </div>
              <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
                {dev.bio}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`mailto:${dev.email}`}
                  className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email me
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 transition-colors text-zinc-300 text-sm px-4 py-2 rounded-lg"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Stat pills */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { label: "Years of experience", value: "6+" },
              { label: "Projects shipped", value: "40+" },
              { label: "Countries worked with", value: "8" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center"
              >
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-zinc-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <SectionHeading number="01" title="Skills & Tech" />
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="space-y-4">
              {dev.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300">{s.name}</span>
                    <span className="text-zinc-600 font-mono">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${s.level}%`, backgroundColor: s.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 font-mono">
                Full stack
              </p>
              <div className="flex flex-wrap gap-2">
                {dev.stack.map((t) => (
                  <span
                    key={t}
                    className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs px-3 py-1.5 rounded-lg hover:border-indigo-500/50 hover:text-zinc-200 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <SectionHeading number="02" title="Experience" />
          <ol className="mt-8 space-y-0 relative border-l border-zinc-800 ml-3">
            {dev.experience.map((e, i) => (
              <li key={i} className="pl-8 pb-10 last:pb-0 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 border border-zinc-600" />
                <p className="text-xs font-mono text-zinc-600 mb-1">{e.period}</p>
                <h3 className="font-semibold text-white">{e.role}</h3>
                <p className="text-indigo-400 text-sm mb-2">{e.company}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{e.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <SectionHeading number="03" title="Projects" />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {dev.projects.map((p) => (
              <div
                key={p.name}
                className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <a
                    href={p.link}
                    className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10M7 17 17 7"/></svg>
                  </a>
                </div>
                <h3 className="font-semibold text-white mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionHeading number="04" title="Contact" />
          <div className="mt-8 bg-linear-to-br from-indigo-500/10 to-zinc-900 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let's build something together
            </h3>
            <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
              Currently open to freelance projects and full-time roles. If you have
              an interesting problem, I'd love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${dev.email}`}
                className="bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-medium px-6 py-2.5 rounded-lg text-sm"
              >
                {dev.email}
              </a>
              <a
                href="#"
                className="border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 transition-all font-medium px-6 py-2.5 rounded-lg text-sm"
              >
                {dev.github}
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 text-center py-6">
        <p className="text-zinc-700 text-xs font-mono">
          Built with React & Tailwind — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

function SectionHeading({ number , title }: InterfaceProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-zinc-700">{number}</span>
      <div className="h-px flex-1 bg-zinc-800" />
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}