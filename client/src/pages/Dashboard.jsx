import { Award, BookMarked, Code2, Trophy } from "lucide-react";
import { tutorials } from "../data/tutorials.js";

export default function Dashboard() {
  return (
    <main className="section">
      <p className="text-xs font-black uppercase text-ocean">Student dashboard</p>
      <h1 className="text-4xl font-black">Your learning command center</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {[["Progress", "68%", BookMarked], ["Saved snippets", "14", Code2], ["Quiz average", "91%", Trophy], ["Certificates", "3", Award]].map(([label, value, Icon]) => <article key={label} className="glass rounded-lg p-5"><Icon className="text-ocean" /><strong className="mt-4 block text-3xl font-black">{value}</strong><p className="text-slate-600 dark:text-slate-300">{label}</p></article>)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-black">Completed tutorials</h2>
          <div className="mt-4 grid gap-3">{tutorials.slice(0, 5).map((item, index) => <div key={item.slug} className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800"><div className="flex justify-between font-bold"><span>{item.title}</span><span>{100 - index * 9}%</span></div><div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700"><span className="block h-full rounded-full bg-ocean" style={{ width: `${100 - index * 9}%` }} /></div></div>)}</div>
        </section>
        <aside className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-black">Certificates</h2>
          <div className="mt-4 grid gap-3">{["Frontend Foundations", "JavaScript Core", "Python Starter"].map((cert) => <div key={cert} className="rounded-lg border border-amber-300 bg-amber-50 p-4 font-bold text-amber-900">{cert}</div>)}</div>
        </aside>
      </div>
    </main>
  );
}
