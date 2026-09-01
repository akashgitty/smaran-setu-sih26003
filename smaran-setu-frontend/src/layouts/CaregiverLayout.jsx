import { Outlet } from 'react-router-dom'
import CaregiverSidebar from '../components/caregiver/CaregiverSidebar'
import CaregiverTopbar from '../components/caregiver/CaregiverTopbar'
export default function CaregiverLayout(){return <div className="flex min-h-screen bg-[#f7f8f5]"><CaregiverSidebar/><div className="min-w-0 flex-1"><CaregiverTopbar/><main className="mx-auto max-w-7xl px-4 py-7 lg:px-8"><Outlet/></main></div></div>}
