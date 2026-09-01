import { Link } from 'react-router-dom'

export default function GameCard({ game }) {
  const Icon = game?.icon

  return (
    <Link
      to={`/user/games/${game?.id}`}
      className="card group block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        {/* Game icon */}
        <div className="rounded-2xl bg-[#e8f2f0] p-4 text-[#2f8f92] transition-transform duration-300 group-hover:scale-105">
          {Icon && <Icon size={30} />}
        </div>

        {/* Duration */}
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {game?.duration}
        </span>
      </div>

      {/* Game title */}
      <h3 className="mt-5 text-xl font-bold text-[#17345f]">
        {game?.title}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
        {game?.description}
      </p>

      {/* Play button */}
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-xl bg-[#2f8f92] px-5 py-3 font-bold text-white transition-colors duration-200 group-hover:bg-[#267a7d]">
          Play →
        </span>

        <span className="text-xs font-semibold text-slate-400">
          Cognitive Game
        </span>
      </div>
    </Link>
  )
}