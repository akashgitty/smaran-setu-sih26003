export default function PageTitle({ title, subtitle, action }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-[#17345f]">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
