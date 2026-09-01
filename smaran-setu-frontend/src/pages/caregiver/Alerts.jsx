import PageTitle from '../../components/common/PageTitle'
import AlertCard from '../../components/caregiver/AlertCard'
export default function Alerts(){return <><PageTitle title="Alerts & Updates" subtitle="Simple activity-based notifications."/><div className="space-y-3"><AlertCard type="warning" title="Activity missed" text="Kamla has not completed today's memory activity."/><AlertCard type="info" title="New memory" text="A new family memory was added to the library."/><AlertCard type="success" title="7-day streak" text="Kamla has been active for seven consecutive days."/></div></>}
