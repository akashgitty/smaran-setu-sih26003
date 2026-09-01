import PageTitle from '../../components/common/PageTitle'
import GameCard from '../../components/patient/GameCard'
import { games } from '../../data/games'
export default function Games(){return <><PageTitle title="Cognitive Games" subtitle="Short, friendly activities designed to keep the mind engaged."/><div className="grid gap-5 sm:grid-cols-2">{games.map(game=><GameCard key={game.id} game={game}/>)}</div></>}
