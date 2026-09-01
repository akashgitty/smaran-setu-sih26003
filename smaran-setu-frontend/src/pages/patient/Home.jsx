import {
  CalendarDays,
  Gamepad2,
  Heart,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import VoiceButton from '../../components/patient/VoiceButton'

const actions = [
  {
    to: '/user/games',
    Icon: Gamepad2,
    title: 'Play Games',
    note: 'Fun activities for your memory',
    color: 'bg-[#e8f4f2]',
    iconColor: 'text-[#2f8f92]',
  },
  {
    to: '/user/memories',
    Icon: Heart,
    title: 'My Memories',
    note: 'People and moments I love',
    color: 'bg-[#f0ebfa]',
    iconColor: 'text-[#7656bd]',
  },
  {
    to: '/user/routine',
    Icon: CalendarDays,
    title: 'My Routine',
    note: 'See what comes next',
    color: 'bg-[#fff4df]',
    iconColor: 'text-[#d28a2d]',
  },
  {
    to: '/user/progress',
    Icon: BarChart3,
    title: 'My Progress',
    note: 'See how I am doing',
    color: 'bg-[#e9f0fa]',
    iconColor: 'text-[#17345f]',
  },
]

export default function Home() {
  return (
    <div className="space-y-7">

      {/* Welcome */}
      <section className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#17345f] via-[#1d5274] to-[#2f8f92] p-7 text-white shadow-lg sm:p-9">

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-base font-semibold text-white/75">
              Good morning ❤️
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-4xl">
              Hello, Kamla!
            </h1>

            <p className="mt-3 max-w-xl text-lg leading-7 text-white/85">
              It is a beautiful day. What would you like to do?
            </p>
          </div>

          <div className="hidden rounded-2xl bg-white/10 p-4 sm:block">
            <Sparkles size={30} />
          </div>
        </div>

      </section>

      {/* Daily goal */}
      <section className="card p-6 sm:p-7">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#2f8f92]">
              Today's goal
            </p>

            <h2 className="mt-1 text-xl font-black text-[#17345f]">
              Keep your mind active
            </h2>

            <p className="mt-1 text-slate-500">
              2 of 3 activities completed
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4f2] text-xl font-black text-[#2f8f92]">
            66%
          </div>

        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-2/3 rounded-full bg-[#2f8f92]" />
        </div>

      </section>

      {/* Main activities */}
      <section>

        <div className="mb-4">
          <p className="text-sm font-bold uppercase tracking-wide text-[#2f8f92]">
            Your space
          </p>

          <h2 className="mt-1 text-2xl font-black text-[#17345f]">
            What would you like to do?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          {actions.map(
            ({ to, Icon, title, note, color, iconColor }) => (
              <Link
                key={to}
                to={to}
                className="card card-hover group flex min-h-[150px] items-center gap-5 p-6"
              >

                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${color} ${iconColor}`}
                >
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-black text-[#17345f]">
                    {title}
                  </h3>

                  <p className="mt-1 text-base text-slate-500">
                    {note}
                  </p>
                </div>

                <ArrowRight
                  className="ml-auto shrink-0 text-slate-300 transition group-hover:text-[#2f8f92]"
                  size={25}
                />

              </Link>
            )
          )}

        </div>

      </section>

      {/* Today's reminder */}
      <section className="card border-[#dcebe8] bg-[#f8fcfb] p-6">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-[#e8f4f2] p-3 text-[#2f8f92]">
            <CheckCircle2 size={26} />
          </div>

          <div>
            <p className="text-sm font-bold text-[#2f8f92]">
              Next activity
            </p>

            <h3 className="mt-1 text-xl font-black text-[#17345f]">
              Memory Match
            </h3>

            <p className="mt-1 text-slate-500">
              A short and fun memory activity.
            </p>

            <Link
              to="/user/games"
              className="mt-4 inline-flex font-bold text-[#2f8f92]"
            >
              Start activity →
            </Link>
          </div>

        </div>

      </section>

      {/* Voice help */}
      <div className="flex justify-center pb-2">
        <VoiceButton text="Need help?" />
      </div>

    </div>
  )
}