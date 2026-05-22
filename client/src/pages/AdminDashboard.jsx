import { BarChart3, FilePenLine, ShieldAlert, UsersRound } from "lucide-react";

export default function AdminDashboard() {
  const users = ["Maya Rodriguez", "Lee Chen", "Ari Brooks", "Sam Patel"];
  return (
    <main className="section">
      <p className="text-xs font-black uppercase text-coral">Admin dashboard</p>
      <h1 className="text-4xl font-black">Platform operations</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {[["Users", "24,812", UsersRound], ["Tutorials", "824", FilePenLine], ["Revenue lift", "18%", BarChart3], ["Moderation", "7 flags", ShieldAlert]].map(([label, value, Icon]) => <article key={label} className="glass rounded-lg p-5"><Icon className="text-coral" /><strong className="mt-4 block text-3xl font-black">{value}</strong><p>{label}</p></article>)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="text-2xl font-black">Manage users</h2>{users.map((user) => <div key={user} className="mt-3 flex items-center justify-between rounded-lg bg-slate-100 p-3 dark:bg-slate-800"><span className="font-bold">{user}</span><div className="flex gap-2"><button className="btn-secondary py-2">Edit</button><button className="rounded-lg bg-coral px-4 py-2 font-bold text-white">Moderate</button></div></div>)}</section>
        <section className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="text-2xl font-black">Content analytics</h2><div className="mt-4 grid gap-3">{["JavaScript Fundamentals", "Python APIs", "CSS Grid Mastery"].map((item, index) => <div key={item} className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800"><div className="flex justify-between font-bold"><span>{item}</span><span>{84 - index * 11}k views</span></div></div>)}</div></section>
      </div>
    </main>
  );
}
