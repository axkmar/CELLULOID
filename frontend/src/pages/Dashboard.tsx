import { ProfileHeader } from "../components/ProfileHeader"
import { PosterWall } from "../components/PosterWall"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <ProfileHeader />
      <PosterWall />
    </main>
  )
}
