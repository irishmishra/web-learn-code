import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../services/api.js";

export default function Auth({ mode }) {
  const { token } = useParams();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });

  async function submit(event) {
    event.preventDefault();
    if (mode === "login") await login({ email: form.email, password: form.password });
    if (mode === "register") await register(form);
    if (mode === "forgot") {
      await api.post("/auth/forgot-password", { email: form.email });
      toast.success("Reset instructions sent");
    }
    if (mode === "reset") {
      await api.post(`/auth/reset-password/${token}`, { password: form.password });
      toast.success("Password reset");
    }
    navigate("/dashboard");
  }

  const title = { login: "Welcome back", register: "Create your account", forgot: "Reset your password", reset: "Choose a new password" }[mode];

  return (
    <main className="section grid place-items-center">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-6">
        <p className="text-xs font-black uppercase text-ocean">Secure authentication</p>
        <h1 className="mt-2 text-3xl font-black">{title}</h1>
        <div className="mt-6 grid gap-3">
          {mode === "register" && <input className="input" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />}
          {(mode === "register" || mode === "login" || mode === "forgot") && <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />}
          {(mode === "register" || mode === "login" || mode === "reset") && <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={8} />}
          {mode === "register" && <select className="input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}><option value="student">Student</option><option value="instructor">Instructor</option></select>}
          <button className="btn-primary w-full" type="submit">{mode === "login" ? "Login" : mode === "forgot" ? "Send reset link" : "Continue"}</button>
        </div>
        <div className="mt-5 flex justify-between text-sm font-bold text-ocean">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot?</Link>
        </div>
      </form>
    </main>
  );
}
