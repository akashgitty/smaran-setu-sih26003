import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../components/common/PageTitle'
import Button from '../../components/common/Button'

export default function AddMemory() {
  const [saved, setSaved] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const title = formData.get('title')
    const person = formData.get('person')
    const category = formData.get('category')
    const story = formData.get('story')

    const newMemory = {
      id: `memory-${Date.now()}`,
      title,
      subtitle: person,
      category,
      story,
      emoji: getCategoryEmoji(category),
      photo: '',
      createdAt: Date.now(),
    }

    console.log('NEW MEMORY:', newMemory)

    const existingMemories = JSON.parse(
      localStorage.getItem('memories') || '[]'
    )

    console.log('OLD MEMORIES:', existingMemories)

    const updatedMemories = [
      ...existingMemories,
      newMemory,
    ]

    localStorage.setItem(
      'memories',
      JSON.stringify(updatedMemories)
    )

    console.log(
      'SAVED MEMORIES:',
      JSON.parse(localStorage.getItem('memories'))
    )

    setSaved(true)

    setTimeout(() => {
      navigate('/caregiver/memories')
    }, 700)
  }

  return (
    <div>
      <PageTitle
        title="Add a Memory"
        subtitle="Create a familiar memory that can later power personalized activities."
      />

      <div className="card max-w-2xl p-7">
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="mb-2 block text-sm font-bold text-[#17345f]">
              Memory title
            </label>

            <input
              name="title"
              className="input"
              placeholder="e.g. Family"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#17345f]">
              Person / place / object
            </label>

            <input
              name="person"
              className="input"
              placeholder="e.g. Rajesh"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#17345f]">
              Relationship or category
            </label>

            <select
              name="category"
              className="input"
              defaultValue="Family"
            >
              <option>Family</option>
              <option>Friend</option>
              <option>Place</option>
              <option>Song</option>
              <option>Important date</option>
              <option>Personal</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#17345f]">
              Memory story
            </label>

            <textarea
              name="story"
              className="input min-h-32"
              placeholder="Write a short, warm description..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#17345f]">
              Photo
            </label>

            <input
              name="photo"
              className="input"
              type="file"
              accept="image/*"
            />

            <p className="mt-2 text-xs text-slate-400">
              A photo can help make the memory more familiar.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            {saved ? 'Saved ✓' : 'Save Memory'}
          </Button>
        </form>
      </div>
    </div>
  )
}

function getCategoryEmoji(category) {
  if (category === 'Family') return '👨‍👩‍👧‍👦'
  if (category === 'Friend') return '🧑‍🤝‍🧑'
  if (category === 'Place') return '🏠'
  if (category === 'Song') return '🎵'
  if (category === 'Important date') return '📅'

  return '💭'
}