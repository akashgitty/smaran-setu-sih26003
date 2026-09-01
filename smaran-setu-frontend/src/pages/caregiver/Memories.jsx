import PageTitle from '../../components/common/PageTitle'
import { Link } from 'react-router-dom'
import { memories } from '../../data/memories'
import Button from '../../components/common/Button'
export default function Memories(){return <><PageTitle title="Memory Library" subtitle="Add familiar people, places, songs and stories for personalized activities." action={<Link to="/caregiver/memories/add"><Button>+ Add Memory</Button></Link>}/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{memories.map(m=><div key={m.id} className="card overflow-hidden"><div className="flex h-36 items-center justify-center bg-gradient-to-br from-[#dfece7] to-[#eee9f8] text-6xl">{m.emoji}</div><div className="p-4"><h3 className="font-bold text-[#17345f]">{m.title}</h3><p className="mt-1 text-sm text-slate-500">{m.subtitle}</p><button className="mt-4 text-sm font-bold text-[#2f8f92]">Edit memory</button></div></div>)}</div></>}
