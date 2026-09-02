import {
  ArrowLeft,
  Heart,
  MapPin,
  CalendarDays,
  Sparkles,
  Volume2,
  Users,
} from 'lucide-react'

import { Link, useParams } from 'react-router-dom'

import { memories } from '../../data/memories'


export default function MemoryDetail() {
  const { memoryId } = useParams()

  const memory =
    memories.find((m) => m.id === memoryId) || memories[0]


  return (
    <div className="mx-auto max-w-3xl pb-8">

      {/* Back button */}
      <Link
        to="/user/memories"
        className="mb-5 inline-flex items-center gap-2 rounded-xl px-2 py-2 font-bold text-slate-600 transition hover:bg-white hover:text-[#2f8f92]"
      >
        <ArrowLeft size={19} />
        Back to memories
      </Link>


      <div className="card overflow-hidden">

        {/* =================================================
            MEMORY HEADER
        ================================================= */}

        <div className="relative flex min-h-70 items-center justify-center overflow-hidden bg-linear-to- from-[#dfece7] via-[#f3f7f5] to-[#eee9f8]">

          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/40" />

          <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/30" />


          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white text-7xl shadow-lg">
            {memory.emoji || '❤️'}
          </div>

        </div>


        {/* =================================================
            MEMORY INFORMATION
        ================================================= */}

        <div className="p-6 sm:p-9">

          <div className="flex items-start gap-4">

            <div className="min-w-0 flex-1">

              <p className="text-sm font-bold uppercase tracking-wide text-[#2f8f92]">
                A special memory
              </p>

              <h1 className="mt-2 text-3xl font-black text-[#17345f] sm:text-4xl">
                {memory.title}
              </h1>

              <p className="mt-2 text-base text-slate-500">
                {memory.subtitle}
              </p>

            </div>


            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-[#d36a75]">
              <Heart
                size={25}
                fill="currentColor"
              />
            </div>

          </div>


          {/* =================================================
              MEMORY DETAILS
          ================================================= */}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            <div className="flex items-center gap-3 rounded-2xl bg-[#f8faf9] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4f2] text-[#2f8f92]">
                <Users size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  People
                </p>

                <p className="font-bold text-[#17345f]">
                  People you love
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3 rounded-2xl bg-[#f8faf9] p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff4df] text-[#d28a2d]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Place
                </p>

                <p className="font-bold text-[#17345f]">
                  A familiar place
                </p>
              </div>

            </div>

          </div>


          {/* =================================================
              STORY
          ================================================= */}

          <div className="mt-8">

            <div className="flex items-center gap-2">

              <Sparkles
                size={19}
                className="text-[#2f8f92]"
              />

              <h2 className="text-xl font-black text-[#17345f]">
                The Story
              </h2>

            </div>


            <div className="mt-4 rounded-3xl bg-[#f8fcfb] p-6">

              <p className="text-base leading-8 text-slate-600">
                {memory.description}
              </p>

            </div>

          </div>


          {/* =================================================
              VOICE BUTTON — FOUNDATION FOR AI FEATURE
          ================================================= */}

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-[#cfe5e1] bg-[#e8f4f2] px-5 py-4 font-bold text-[#17345f] transition hover:-translate-y-0.5 hover:bg-[#dff0ed]"
          >

            <Volume2
              size={22}
              className="text-[#2f8f92]"
            />

            Listen to this memory

          </button>


          {/* =================================================
              FOOTER MESSAGE
          ================================================= */}

          <div className="mt-7 flex items-center justify-center gap-2 text-center text-sm font-semibold text-slate-400">

            <CalendarDays size={16} />

            A memory worth remembering ❤️

          </div>

        </div>

      </div>

    </div>
  )
}