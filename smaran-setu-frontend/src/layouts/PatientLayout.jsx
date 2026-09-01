import { Outlet } from 'react-router-dom'
import PatientNavbar from '../components/patient/PatientNavbar'
import PatientBottomNav from '../components/patient/PatientBottomNav'
import VoiceButton from '../components/patient/VoiceButton'
import { useAccessibility } from '../context/AccessibilityContext'
export default function PatientLayout(){const {reducedMotion}=useAccessibility(); return <div className={`page-shell patient-large ${reducedMotion?'motion-reduce':''}`}><PatientNavbar/><main className="mx-auto max-w-6xl px-4 pb-28 pt-7 sm:px-6 md:pb-10"><Outlet/></main><div className="fixed bottom-20 right-4 z-20 md:bottom-6"><VoiceButton text="Need help?"/></div><PatientBottomNav/></div>}
