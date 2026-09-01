import PageTitle from '../../components/common/PageTitle'
import MemoryCard from '../../components/patient/MemoryCard'
import { memories } from '../../data/memories'
export default function Memories(){return <><PageTitle title="My Memories ❤️" subtitle="Familiar people, places and moments that matter to you."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{memories.map(m=><MemoryCard key={m.id} memory={m}/>)}</div></>}
