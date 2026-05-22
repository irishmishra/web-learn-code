import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, BrainCircuit, Code2, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import { stats, testimonials, tutorials } from "../data/tutorials.js";

export default function Landing() {
  return (
    <main>
      <section className="hero-bg code-grid overflow-hidden">
        <div className="section grid min-h-[calc(100vh-4rem)] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="mb-4 inline-flex rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-2 text-sm font-black text-ocean">Interactive learning for modern developers</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">Learn code. Practice live. Ship real work.</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">A polished coding platform inspired by W3Schools, Codecademy, GitHub, Vercel, and Stripe, with tutorials, quizzes, dashboards, and a secure API foundation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary" to="/tutorials">Start learning <ArrowRight size={18} /></Link>
              <Link className="btn-secondary" to="/playground">Open playground</Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => <div key={label} className="glass rounded-lg p-4"><strong className="text-2xl font-black">{value}</strong><p className="text-sm text-slate-600 dark:text-slate-300">{label}</p></div>)}
            </div>
          </motion.div>

          <motion.div className="glass rounded-lg p-4" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700">
              <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-coral" /><span className="h-3 w-3 rounded-full bg-amber" /><span className="h-3 w-3 rounded-full bg-ocean" /></div>
              <span className="font-mono text-sm text-slate-500">learning-path.tsx</span>
            </div>
            <pre className="overflow-auto rounded-lg bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100"><code>{`const path = [
  "HTML5", "CSS3", "JavaScript",
  "Python", "Java", "C++", "C", "C#"
];

path.map(skill => practice(skill));`}</code></pre>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Live preview", "JWT auth", "Admin tools"].map((item) => <div key={item} className="rounded-lg bg-white/70 p-3 text-sm font-bold dark:bg-slate-900">{item}</div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Trending technologies" title="A curriculum built for momentum">Scan fast, go deep, save work, earn certificates, and keep your progress synced across sessions.</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tutorials.map((tutorial) => (
            <Link to={`/tutorials/${tutorial.slug}`} key={tutorial.slug} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <span className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${tutorial.color} text-sm font-black text-white`}>{tutorial.icon}</span>
              <h3 className="mt-5 text-xl font-black">{tutorial.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tutorial.theory}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section grid gap-4 md:grid-cols-3">
        {[["Guided tutorials", BookOpen], ["Quiz intelligence", BrainCircuit], ["Certificates", Award], ["Community", UsersRound], ["Playground", Code2], ["Notifications", Sparkles]].map(([title, Icon]) => (
          <article key={title} className="glass rounded-lg p-6">
            <Icon className="text-ocean" />
            <h3 className="mt-4 text-xl font-black">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Production-style workflows, progress tracking, bookmarks, notes, comments, likes, and role-aware content controls.</p>
          </article>
        ))}
      </section>

      <section className="section">
        <SectionTitle eyebrow="Testimonials" title="Loved by learners and teams" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(([name, quote]) => <blockquote key={name} className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><p className="text-slate-700 dark:text-slate-200">"{quote}"</p><cite className="mt-4 block font-black not-italic text-ocean">{name}</cite></blockquote>)}
        </div>
      </section>
    </main>
  );
}
