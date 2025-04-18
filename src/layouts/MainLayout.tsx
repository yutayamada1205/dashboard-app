import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function MainLayout(){
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  )
}