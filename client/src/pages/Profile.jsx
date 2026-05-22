import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user } = useAuth();
  return <main className="section"><div className="glass max-w-2xl rounded-lg p-6"><p className="text-xs font-black uppercase text-ocean">Profile editing</p><h1 className="text-4xl font-black">{user?.name}</h1><div className="mt-6 grid gap-3"><input className="input" defaultValue={user?.name} /><input className="input" defaultValue={user?.email} /><input className="input" type="file" /><button className="btn-primary">Save profile</button></div></div></main>;
}
