export default function StatCard({ icon: Icon, label, value, note }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-sm font-semibold text-slate-500">{label}</p><p className="mt-1 text-3xl font-bold text-[#17345f]">{value}</p></div>
        {Icon && <div className="rounded-2xl bg-[#e8f2f0] p-3 text-[#2f8f92]"><Icon size={24} /></div>}
      </div>
      {note && <p className="mt-3 text-sm text-slate-500">{note}</p>}
    </div>
  )
}
