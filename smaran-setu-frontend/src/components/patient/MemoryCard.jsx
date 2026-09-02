export default function MemoryCard({ memory, title, description, image, icon = '❤️', onClick }) {
  // Support both:
  // <MemoryCard memory={memory} />
  // and
  // <MemoryCard title="..." description="..." />

  const memoryTitle = title || memory?.title || 'My Memory'
  const memoryDescription =
    description ||
    memory?.description ||
    'A special memory to remember and cherish.'

  const memoryImage = image || memory?.image
  const memoryIcon = memory?.icon || icon

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Memory Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-rose-50 via-purple-50 to-teal-50">
        {memoryImage ? (
          <img
            src={memoryImage}
            alt={memoryTitle}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
              {memoryIcon}
            </div>
          </div>
        )}

        {/* Heart */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
          ❤️
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#17345f]">
          {memoryTitle}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {memoryDescription}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-bold text-[#2f8f92]">
            View Memory →
          </span>

          <span className="text-xl">
            ❤️
          </span>
        </div>
      </div>
    </div>
  )
}