import { useEffect, useState } from 'react'
import {
  Brain,
  Image,
  Hash,
  Search,
  TrendingUp,
  Trophy,
} from 'lucide-react'

import PageTitle from '../../components/common/PageTitle'
import ActivityChart from '../../components/caregiver/ActivityChart'

export default function Progress() {
  const [results, setResults] = useState([])

  useEffect(() => {
    const savedResults = JSON.parse(
      localStorage.getItem('gameResults') || '[]'
    )

    setResults(savedResults)
  }, [])

  /* =====================================================
     OVERALL STATISTICS
     ===================================================== */

  const gamesCompleted = results.length

  const averageScore =
    gamesCompleted > 0
      ? Math.round(
          results.reduce(
            (total, item) => total + item.score,
            0
          ) / gamesCompleted
        )
      : 0

  const bestScore =
    gamesCompleted > 0
      ? Math.max(...results.map((item) => item.score))
      : 0

  /* =====================================================
     GAME PERFORMANCE
     ===================================================== */

  const getGameScore = (type) => {
    const gameResults = results.filter(
      (item) => item.gameType === type
    )

    if (gameResults.length === 0) return 0

    return Math.round(
      gameResults.reduce(
        (total, item) => total + item.score,
        0
      ) / gameResults.length
    )
  }

  const memoryScore = getGameScore('memory')
  const pictureScore = getGameScore('picture')
  const numberScore = getGameScore('number')
  const objectScore = getGameScore('object')

  /* =====================================================
     ACTIVITY CHART
     ===================================================== */

  const recentResults = [...results]
    .sort((a, b) => a.timestamp - b.timestamp)
    .slice(-7)

  const chart =
    recentResults.length > 0
      ? recentResults.map((item, index) => ({
          day: `Game ${index + 1}`,
          score: item.score,
        }))
      : [
          { day: 'Game 1', score: 0 },
          { day: 'Game 2', score: 0 },
          { day: 'Game 3', score: 0 },
          { day: 'Game 4', score: 0 },
        ]

  return (
    <div className="space-y-6">

      <PageTitle
        title="Progress"
        subtitle="Longer-term activity trends for Kamla."
      />

      {/* =====================================================
          OVERVIEW
          ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-3">

        <div className="card p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f2f0] text-[#2f8f92]">
              <TrendingUp size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Average Score
              </p>

              <p className="mt-1 text-3xl font-black text-[#17345f]">
                {averageScore}%
              </p>
            </div>

          </div>

        </div>

        <div className="card p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <Trophy size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Best Score
              </p>

              <p className="mt-1 text-3xl font-black text-[#17345f]">
                {bestScore}%
              </p>
            </div>

          </div>

        </div>

        <div className="card p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
              <Brain size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                Games Completed
              </p>

              <p className="mt-1 text-3xl font-black text-[#17345f]">
                {gamesCompleted}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          ACTIVITY TREND
          ===================================================== */}

      <div className="card p-6 sm:p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-xl font-bold text-[#17345f]">
              Activity Trend
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Recent cognitive activity scores.
            </p>

          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f2f0] text-[#2f8f92]">
            <TrendingUp size={22} />
          </div>

        </div>

        <div className="mt-6">
          <ActivityChart data={chart} />
        </div>

      </div>

      {/* =====================================================
          GAME PERFORMANCE
          ===================================================== */}

      <div className="card p-6 sm:p-7">

        <div className="mb-7">

          <h2 className="text-xl font-bold text-[#17345f]">
            Cognitive Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Performance across different cognitive activities.
          </p>

        </div>

        <PerformanceRow
          icon={Brain}
          label="Memory"
          score={memoryScore}
        />

        <PerformanceRow
          icon={Image}
          label="Picture Recall"
          score={pictureScore}
        />

        <PerformanceRow
          icon={Hash}
          label="Number Sequence"
          score={numberScore}
        />

        <PerformanceRow
          icon={Search}
          label="Find the Object"
          score={objectScore}
        />

      </div>

      {/* =====================================================
          RECENT PERFORMANCE
          ===================================================== */}

      <div className="card p-6 sm:p-7">

        <div className="mb-6">

          <h2 className="text-xl font-bold text-[#17345f]">
            Recent Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest completed activities.
          </p>

        </div>

        {results.length === 0 ? (

          <div className="rounded-2xl bg-[#f8fcfb] p-7 text-center">

            <div className="text-3xl">
              📊
            </div>

            <p className="mt-2 font-bold text-[#17345f]">
              No performance data yet
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Performance will appear after Kamla completes
              some cognitive activities.
            </p>

          </div>

        ) : (

          <div className="space-y-3">

            {[...results]
              .reverse()
              .slice(0, 5)
              .map((item, index) => (

                <div
                  key={`${item.timestamp}-${index}`}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-[#f8fcfb] p-4"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2f8f92] shadow-sm">
                      <GameIcon type={item.gameType} />
                    </div>

                    <div>

                      <p className="font-bold text-[#17345f]">
                        {item.game}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-400">
                        {item.date}
                      </p>

                    </div>

                  </div>

                  <div className="rounded-xl bg-white px-4 py-2 font-black text-[#2f8f92] shadow-sm">
                    {item.score}%
                  </div>

                </div>

              ))}

          </div>

        )}

      </div>

      {/* =====================================================
          SUPPORT MESSAGE
          ===================================================== */}

      <div className="rounded-3xl border border-[#dcefeb] bg-[#f7fbfa] p-6">

        <div className="flex items-start gap-4">

          <div className="text-3xl">
            💚
          </div>

          <div>

            <h3 className="text-lg font-bold text-[#17345f]">
              Progress is about consistency
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Encourage Kamla to continue activities regularly
              and celebrate small improvements along the way.
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}


/* =====================================================
   PERFORMANCE ROW
   ===================================================== */

function PerformanceRow({
  icon: Icon,
  label,
  score,
}) {
  return (
    <div className="mb-6 last:mb-0">

      <div className="mb-2 flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f2f0] text-[#2f8f92]">
            <Icon size={18} />
          </div>

          <span className="font-bold text-[#17345f]">
            {label}
          </span>

        </div>

        <span className="font-bold text-[#2f8f92]">
          {score > 0 ? `${score}%` : 'Not played'}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-100">

        <div
          className="h-full rounded-full bg-[#2f8f92] transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

    </div>
  )
}


/* =====================================================
   GAME ICON
   ===================================================== */

function GameIcon({ type }) {
  if (type === 'number') {
    return <Hash size={19} />
  }

  if (type === 'picture') {
    return <Image size={19} />
  }

  if (type === 'object') {
    return <Search size={19} />
  }

  return <Brain size={19} />
}