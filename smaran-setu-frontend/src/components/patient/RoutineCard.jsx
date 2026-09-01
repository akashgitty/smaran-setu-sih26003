export default function RoutineCard({
  routine,
  time,
  title,
  description,
  icon,
  color,
  completed = false,
}) {
  // Support both:
  // <RoutineCard routine={item} />
  // and individual props.
  const item = routine || {}

  const routineTime = time || item.time || '08:00'
  const routineTitle = title || item.title || item.name || 'Activity'
  const routineDescription =
    description ||
    item.description ||
    item.subtitle ||
    'Your scheduled activity'

  const routineIcon = icon || item.icon || '🟢'

  const routineColor =
    color ||
    item.color ||
    'green'

  const colors = {
    green: {
      dot: 'bg-green-500',
      icon: 'bg-green-50 text-green-600',
      line: 'bg-green-200',
    },
    blue: {
      dot: 'bg-blue-500',
      icon: 'bg-blue-50 text-blue-600',
      line: 'bg-blue-200',
    },
    orange: {
      dot: 'bg-orange-500',
      icon: 'bg-orange-50 text-orange-600',
      line: 'bg-orange-200',
    },
    purple: {
      dot: 'bg-purple-500',
      icon: 'bg-purple-50 text-purple-600',
      line: 'bg-purple-200',
    },
  }

  const selectedColor = colors[routineColor] || colors.green

  return (
    <div
      className={`relative flex gap-5 rounded-2xl p-4 transition-all duration-200 ${
        completed
          ? 'bg-slate-50 opacity-70'
          : 'bg-white hover:bg-slate-50 hover:shadow-sm'
      }`}
    >
      {/* Time */}
      <div className="w-16 flex-shrink-0 pt-1">
        <p className="text-base font-bold text-[#17345f]">
          {routineTime}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 h-4 w-4 rounded-full border-4 border-white shadow-sm ${selectedColor.dot}`}
        />

        {/* Vertical line */}
        <div
          className={`absolute top-4 h-full min-h-[90px] w-0.5 ${selectedColor.line}`}
        />
      </div>

      {/* Activity */}
      <div className="flex min-w-0 flex-1 items-start gap-4 pb-5">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl ${selectedColor.icon}`}
        >
          {routineIcon}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-[#17345f]">
              {routineTitle}
            </h3>

            {completed && (
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                Completed
              </span>
            )}
          </div>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            {routineDescription}
          </p>
        </div>
      </div>
    </div>
  )
}