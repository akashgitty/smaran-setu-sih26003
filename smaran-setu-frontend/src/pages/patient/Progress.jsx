import PageTitle from '../../components/common/PageTitle'

export default function Progress() {
  return (
    <>
      <PageTitle
        title="My Progress"
        subtitle="See how you are doing this week."
      />

      <div className="space-y-6">

        {/* Encouragement Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#e8f2f0] to-[#f4f8f7] p-7 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#2f8f92]">
                Keep going!
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#17345f]">
                🌟 You're Doing Great!
              </h2>

              <p className="mt-2 text-slate-600">
                Every activity is a small step forward.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-[#17345f]">
                7 days 🔥
              </div>

              <div className="text-sm font-semibold text-slate-500">
                Streak
              </div>
            </div>
          </div>
        </div>


        {/* Main Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

          {/* Average Score */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
                🎯
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Average Score
                </p>

                <p className="text-3xl font-bold text-[#17345f]">
                  82%
                </p>
              </div>
            </div>
          </div>


          {/* Activities */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                ⭐
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Activities
                </p>

                <p className="text-3xl font-bold text-[#17345f]">
                  5
                </p>
              </div>
            </div>
          </div>


          {/* Games Completed */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-2xl">
                🧠
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Games Completed
                </p>

                <p className="text-3xl font-bold text-[#17345f]">
                  24
                </p>
              </div>
            </div>
          </div>

        </div>


        {/* This Week */}
        <div className="rounded-3xl bg-white p-7 shadow-sm border border-slate-100">

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-[#17345f]">
              This Week
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your activity at a glance.
            </p>
          </div>


          {/* Memory */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-bold text-[#17345f]">
                🧠 Memory
              </span>

              <span className="font-bold text-[#2f8f92]">
                80%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#2f8f92]"
                style={{ width: '80%' }}
              />
            </div>
          </div>


          {/* Attention */}
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-bold text-[#17345f]">
                🎯 Attention
              </span>

              <span className="font-bold text-[#2f8f92]">
                70%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#2f8f92]"
                style={{ width: '70%' }}
              />
            </div>
          </div>


          {/* Consistency */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-bold text-[#17345f]">
                🔄 Consistency
              </span>

              <span className="font-bold text-[#2f8f92]">
                90%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#2f8f92]"
                style={{ width: '90%' }}
              />
            </div>
          </div>

        </div>


        {/* Positive Message */}
        <div className="rounded-3xl border border-[#dcefeb] bg-[#f7fbfa] p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">
              💚
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#17345f]">
                Keep enjoying your activities!
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                You are building a wonderful routine. Keep playing,
                remembering and staying active.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}