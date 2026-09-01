import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Smaran Setu home">
      <img src={logo} alt="Smaran Setu logo" className={`${compact ? 'h-10 w-10 object-contain' : 'h-14 w-14 object-contain'}`} />
      <div className="leading-tight">
        <div className="font-serif text-xl font-bold tracking-[0.08em] text-[#17345f]">SMARAN SETU</div>
        {!compact && <div className="text-xs text-[#2f8f92]">Bridging Memories, Connecting Lives</div>}
      </div>
    </Link>
  )
}
