import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-black">CodeForge Academy</p>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">Enterprise-ready learning infrastructure for schools, creators, and ambitious self-taught developers.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/community">Community</Link>
        </div>
      </div>
    </footer>
  );
}
