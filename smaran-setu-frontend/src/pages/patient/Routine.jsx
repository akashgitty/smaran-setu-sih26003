import PageTitle from '../../components/common/PageTitle'
import RoutineCard from '../../components/patient/RoutineCard'
import { routines } from '../../data/routines'
export default function Routine(){return <><PageTitle title="Today's Routine" subtitle="A gentle list of activities for your day."/><div className="space-y-3">{routines.map((item,i)=><RoutineCard key={i} item={item}/>)}</div></>}
