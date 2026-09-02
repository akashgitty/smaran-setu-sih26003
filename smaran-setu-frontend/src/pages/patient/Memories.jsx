import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../../components/common/PageTitle'
import Button from '../../components/common/Button'
import { memories as defaultMemories } from '../../data/memories'

export default function Memories() {
  const [memoryList, setMemoryList] = useState([])

  const loadMemories = () => {
    try {
      const savedMemories = JSON.parse(
        localStorage.getItem('memories') || '[]'
      )

      console.log('Saved memories:', savedMemories)

      setMemoryList([
        ...defaultMemories,
        ...savedMemories,
      ])
    } catch (error) {
      console.error('Error loading memories:', error)
      setMemoryList(defaultMemories)
    }
  }

  useEffect(() => {
    loadMemories()
  }, [])

  return (
    <>
      <PageTitle
        title="Memory Library"
        subtitle="Add familiar people, places, songs and stories for personalized activities."
        action={
          <Link to="/caregiver/memories/add">
            <Button>+ Add Memory</Button>
          </Link>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {memoryList.map((memory) => (
          <div
            key={memory.id}
            className="card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image / Emoji */}
            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-[#dfece7] to-[#eee9f8]">
              {memory.photo ? (
                <img
                  src={memory.photo}
                  alt={memory.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-6xl">
                  {memory.emoji || '💭'}
                </span>
              )}
            </div>

            {/* Memory Details */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-[#17345f]">
                  {memory.title}
                </h3>

                {memory.category && (
                  <span className="rounded-full bg-[#e8f2f0] px-2 py-1 text-[10px] font-bold text-[#2f8f92]">
                    {memory.category}
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-medium text-slate-600">
                {memory.subtitle}
              </p>

              {memory.story && (
                <p className="mt-3 text-sm leading-5 text-slate-500">
                  {memory.story}
                </p>
              )}

              <button
                type="button"
                className="mt-4 text-sm font-bold text-[#2f8f92] hover:underline"
              >
                Edit memory
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}