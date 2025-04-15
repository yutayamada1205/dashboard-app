import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  )
}