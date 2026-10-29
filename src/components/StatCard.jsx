export default function StatCard({ icon, label, value, detail }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-2xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <strong className="mt-0.5 block text-2xl font-black tracking-tight text-slate-950">
          {value}
        </strong>
        <small className="text-xs text-slate-400">{detail}</small>
      </div>
    </article>
  );
}
