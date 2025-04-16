import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import { Outlet } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  )
}