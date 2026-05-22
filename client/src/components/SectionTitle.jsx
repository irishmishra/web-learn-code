export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1fr] lg:items-end">
      <div>
        <p className="mb-3 text-xs font-black uppercase text-ocean">{eyebrow}</p>
        <h2 className="text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
      </div>
      {children && <p className="max-w-2xl text-slate-600 dark:text-slate-300">{children}</p>}
    </div>
  );
}
