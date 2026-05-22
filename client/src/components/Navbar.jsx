import { BookOpen, Code2, LayoutDashboard, LogOut, Menu, Moon, Search, Shield, Sun, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const links = [
  ["Home", "/"],
  ["Tutorials", "/tutorials"],
  ["Playground", "/playground"],
  ["Courses", "/courses"],
  ["Quiz", "/quiz"],
  ["Community", "/community"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("codeforge-theme") === "dark");
  const { user, logout } = useAuth();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("codeforge-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-black">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-ocean to-coral text-white"><Code2 size={21} /></span>
          <span>CodeForge</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-bold ${isActive ? "bg-teal-500/10 text-ocean" : "text-slate-600 hover:text-ocean dark:text-slate-300"}`}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="rounded-lg border border-slate-200 p-2 dark:border-slate-700" aria-label="Search"><Search size={18} /></button>
          <button className="rounded-lg border border-slate-200 p-2 dark:border-slate-700" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          {user ? (
            <div className="group relative">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 font-bold dark:border-slate-700"><UserRound size={18} /> {user.name}</button>
              <div className="invisible absolute right-0 top-11 w-56 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                <Link className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" to="/dashboard"><LayoutDashboard size={17} /> Dashboard</Link>
                <Link className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" to="/profile"><UserRound size={17} /> Profile</Link>
                {user.role === "admin" && <Link className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" to="/admin"><Shield size={17} /> Admin</Link>}
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800" onClick={logout}><LogOut size={17} /> Logout</button>
              </div>
            </div>
          ) : (
            <>
              <Link className="btn-secondary py-2" to="/login">Login</Link>
              <Link className="btn-primary py-2" to="/register">Register</Link>
            </>
          )}
        </div>

        <button className="rounded-lg border border-slate-200 p-2 lg:hidden dark:border-slate-700" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 font-bold hover:bg-slate-100 dark:hover:bg-slate-900">{label}</Link>)}
            <Link to="/dashboard" className="flex items-center gap-2 rounded-lg px-3 py-2 font-bold"><BookOpen size={18} /> Dashboard</Link>
            <button className="rounded-lg px-3 py-2 text-left font-bold" onClick={() => setDark(!dark)}>Toggle theme</button>
          </div>
        </div>
      )}
    </header>
  );
}
