import { Bookmark, CheckCircle2, StickyNote } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import { tutorials } from "../data/tutorials.js";

export default function Tutorials() {
  const { slug } = useParams();
  const [query, setQuery] = useState("");
  const active = tutorials.find((item) => item.slug === slug) || tutorials[0];
  const filtered = useMemo(() => tutorials.filter((item) => `${item.title} ${item.level} ${item.theory}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <main className="section">
      <SectionTitle eyebrow="Tutorial library" title="Choose your language path">Each page includes theory, syntax, preview output, difficulty, notes, progress tracking, bookmarks, and practice problems.</SectionTitle>
      <input className="input mb-6 w-full max-w-xl" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search HTML, Python, backend, systems..." />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="grid content-start gap-2">
          {filtered.map((item) => <Link key={item.slug} to={`/tutorials/${item.slug}`} className={`rounded-lg border p-4 font-bold ${active.slug === item.slug ? "border-ocean bg-teal-500/10 text-ocean" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`}>{item.title}<span className="block text-xs font-semibold text-slate-500">{item.level}</span></Link>)}
        </aside>
        <article className="glass rounded-lg p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-black uppercase text-ocean">{active.level}</p>
              <h1 className="text-4xl font-black">{active.title} Tutorial</h1>
            </div>
            <div className="flex gap-2"><button className="btn-secondary py-2"><Bookmark size={18} /> Bookmark</button><button className="btn-primary py-2"><CheckCircle2 size={18} /> Mark complete</button></div>
          </div>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-200">{active.theory}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <pre className="overflow-auto rounded-lg bg-slate-950 p-5 font-mono text-sm text-slate-100"><code>{active.syntax}</code></pre>
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-black uppercase text-slate-500">Output preview</p>
              <div className="mt-4 rounded-lg bg-slate-100 p-6 font-bold dark:bg-slate-800">{active.output}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 text-xl font-black"><StickyNote size={20} /> Notes</h3>
              <textarea className="input mt-3 min-h-32 w-full" placeholder={`Write your ${active.title} notes...`} />
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-xl font-black">Practice problems</h3>
              <ul className="mt-3 grid gap-3">
                {active.practice.map((item) => <li key={item} className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">{item}</li>)}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
