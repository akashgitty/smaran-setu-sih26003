export default function RoutineCard({
  routine,
  item,
  time,
  title,
  description,
  icon,
  color,
  completed,
  onComplete,
}) {
  // Get the routine data
  const data = routine || item || {}

  // Support your current routines.js structure
  const routineTime =
    time || data.time || '08:00 AM'

  const routineTitle =
    title || data.title || 'Activity'

  const routineDescription =
    description ||
    data.description ||
    data.note ||
    'Your scheduled activity'

  const routineIcon =
    icon ||
    data.icon ||
    '🌿'

  const routineColor =
    color ||
    data.color ||
    'green'

  // Your routines.js uses "done"
  const isCompleted =
    completed !== undefined
      ? completed
      : data.done === true

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

  const selectedColor =
    colors[routineColor] || colors.green

  return (
    <div
      className={`relative flex gap-5 rounded-3xl border p-5 transition-all duration-200 sm:p-6 ${
        isCompleted
          ? 'border-[#cfe5e1] bg-[#f4faf8]'
          : 'border-slate-200 bg-white hover:border-[#cfe5e1] hover:shadow-md'
      }`}
    >

      {/* Time */}
      <div className="w-20 shrink-0 pt-1">

        <p className="text-base font-black text-[#17345f] sm:text-lg">
          {routineTime}
        </p>

      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">

        {/* Dot */}
        <div
          className={`relative z-10 h-4 w-4 rounded-full border-4 border-white shadow-sm ${selectedColor.dot}`}
        />

        {/* Line */}
        <div
          className={`absolute top-4 h-full min-h-23.75 w-0.5 ${selectedColor.line}`}
        />

      </div>

      {/* Activity */}
      <div className="flex min-w-0 flex-1 items-start gap-4 pb-5">

        {/* Icon */}
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${selectedColor.icon}`}
        >
          {routineIcon}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-2">

            <h3
              className={`text-lg font-black sm:text-xl ${
                isCompleted
                  ? 'text-[#477d76]'
                  : 'text-[#17345f]'
              }`}
            >
              {routineTitle}
            </h3>

            {isCompleted && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                ✓ Completed
              </span>
            )}

          </div>

          <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
            {routineDescription}
          </p>

        </div>

        {/* Complete button */}
        <button
          type="button"
          onClick={onComplete}
          aria-label={
            isCompleted
              ? `Mark ${routineTitle} as incomplete`
              : `Mark ${routineTitle} as complete`
          }
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
            isCompleted
              ? 'bg-[#2f8f92] text-white hover:scale-105'
              : 'border-2 border-slate-300 text-slate-300 hover:border-[#2f8f92] hover:text-[#2f8f92]'
          }`}
        >
          {isCompleted ? '✓' : '○'}
        </button>

      </div>

    </div>
  )
}