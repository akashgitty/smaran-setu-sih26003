import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('smaran-theme') === 'dark'
  })

  useEffect(() => {
    const root = document.documentElement

    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('smaran-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('smaran-theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      type="button"
      onClick={() => setDarkMode((current) => !current)}
      aria-label={
        darkMode
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      title={
        darkMode
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      }
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#17345f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-yellow-300"
    >
      {darkMode ? (
        <Sun size={21} />
      ) : (
        <Moon size={21} />
      )}
    </button>
  )
}