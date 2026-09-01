import { Activity, Brain, CheckCircle2, Flame } from 'lucide-react'
import PageTitle from '../../components/common/PageTitle'
import StatCard from '../../components/common/StatCard'
import ActivityChart from '../../components/caregiver/ActivityChart'
import AlertCard from '../../components/caregiver/AlertCard'

const chart = [
  { day: 'Mon', score: 68 },
  { day: 'Tue', score: 72 },
  { day: 'Wed', score: 70 },
  { day: 'Thu', score: 78 },
  { day: 'Fri', score: 82 },
  { day: 'Sat', score: 80 },
  { day: 'Sun', score: 86 },
]

export default function Dashboard() {
  return (
    <>
      {/* Page heading */}
      <PageTitle
        title="Caregiver Dashboard"
        subtitle="A quick overview of Kamla's recent activity."
      />

      <div className="space-y-6">

        {/* Greeting */}
        <div className="rounded-3xl bg-gradient-to-r from-[#e8f2f0] to-[#f7faf9] p-6 shadow-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-wide text-[#2f8f92]">
            Caregiver Overview
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#17345f] sm:text-4xl">
            Good morning, Anjali 👋
          </h1>

          <p className="mt-2 text-base text-slate-600">
            Here's how Kamla is doing today.
          </p>
        </div>


        {/* Statistics */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={Brain}
            label="Average score"
            value="82%"
            note="+6% this week"
          />

          <StatCard
            icon={Activity}
            label="Activities"
            value="24"
            note="5 this week"
          />

          <StatCard
            icon={Flame}
            label="Streak"
            value="7 days"
            note="Keep it going"
          />

          <StatCard
            icon={CheckCircle2}
            label="Completion"
            value="86%"
            note="2 activities pending"
          />

        </div>


        {/* Activity + Insights */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">

          {/* Cognitive Activity */}
          <div className="card overflow-hidden p-6 sm:p-7">

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#17345f]">
                  Cognitive Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Activity score across the last 7 days.
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f2f0] text-[#2f8f92]">
                <Activity size={22} />
              </div>
            </div>

            <div className="mt-6">
              <ActivityChart data={chart} />
            </div>

          </div>


          {/* Smart Insights */}
          <div className="card p-6 sm:p-7">

            <div>
              <h2 className="text-xl font-bold text-[#17345f]">
                Smart Insights
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Helpful observations from recent activity.
              </p>
            </div>

            <div className="mt-5 space-y-3">

              <AlertCard
                type="success"
                title="Positive trend"
                text="Recent activity scores are improving."
              />

              <AlertCard
                type="info"
                title="Best time"
                text="Morning activities have the highest completion rate."
              />

              <AlertCard
                type="warning"
                title="Needs attention"
                text="Today's memory activity is pending."
              />

            </div>

          </div>

        </div>


        {/* Friendly reminder */}
        <div className="rounded-3xl border border-[#dcefeb] bg-[#f7fbfa] p-6">
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
              💚
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#17345f]">
                A little encouragement goes a long way
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Keep encouraging Kamla to complete her daily activities
                and enjoy the games together.
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}