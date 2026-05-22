import { useMemo, useState } from "react";

const questions = [
  { q: "Which language styles a web page?", a: "CSS", options: ["HTML", "CSS", "C"] },
  { q: "Which method hashes passwords in this platform?", a: "bcrypt", options: ["bcrypt", "localStorage", "base64"] },
  { q: "Which token format protects API routes?", a: "JWT", options: ["JWT", "CSV", "SVG"] }
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const score = useMemo(() => questions.filter((q, index) => answers[index] === q.a).length, [answers]);
  return (
    <main className="section">
      <p className="text-xs font-black uppercase text-ocean">Timed MCQ quiz</p>
      <h1 className="text-4xl font-black">Skill check</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-4">{questions.map((question, index) => <article key={question.q} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><h2 className="text-xl font-black">{index + 1}. {question.q}</h2><div className="mt-4 flex flex-wrap gap-2">{question.options.map((option) => <button key={option} onClick={() => setAnswers({ ...answers, [index]: option })} className={`rounded-lg px-4 py-2 font-bold ${answers[index] === option ? "bg-ocean text-white" : "bg-slate-100 dark:bg-slate-800"}`}>{option}</button>)}</div></article>)}</section>
        <aside className="glass rounded-lg p-6"><p className="text-sm font-black uppercase text-slate-500">Timer</p><strong className="text-4xl font-black">10:00</strong><p className="mt-6 text-sm font-black uppercase text-slate-500">Score</p><strong className="text-4xl font-black">{score}/{questions.length}</strong><div className="mt-6 rounded-lg bg-slate-100 p-4 dark:bg-slate-800"><p className="font-bold">Leaderboard</p><ol className="mt-2 list-decimal pl-5 text-sm"><li>Maya 980</li><li>Jordan 940</li><li>You {score * 300}</li></ol></div></aside>
      </div>
    </main>
  );
}
