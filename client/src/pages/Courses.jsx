import SectionTitle from "../components/SectionTitle.jsx";

export default function Courses() {
  return <main className="section"><SectionTitle eyebrow="Courses" title="Structured career paths">Uploadable instructor courses with lessons, modules, certificates, and progress analytics.</SectionTitle><div className="grid gap-4 md:grid-cols-3">{["Frontend Engineer", "Backend APIs", "Systems Programmer"].map((course) => <article key={course} className="glass rounded-lg p-6"><p className="text-xs font-black uppercase text-ocean">12 modules</p><h2 className="mt-2 text-2xl font-black">{course}</h2><p className="mt-3 text-slate-600 dark:text-slate-300">Video lessons, readings, quizzes, projects, certificates, and instructor feedback.</p><button className="btn-primary mt-5">Enroll</button></article>)}</div></main>;
}
