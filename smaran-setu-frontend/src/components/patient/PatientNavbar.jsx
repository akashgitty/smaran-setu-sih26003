import { Bell, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Logo from '../common/Logo'
import { useAuth } from '../../context/AuthContext'

export default function PatientNavbar() {
  const { logout } = useAuth(); const navigate = useNavigate()
  return <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"><Logo compact /><div className="flex items-center gap-2"><button className="rounded-xl p-3 hover:bg-slate-100" aria-label="Notifications"><Bell size={21} /></button><button onClick={() => { logout(); navigate('/login') }} className="rounded-xl p-3 hover:bg-slate-100" aria-label="Log out"><LogOut size={21} /></button></div></div></header>
}
