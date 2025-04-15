import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

type MainLayoutProps = {
  children: ReactNode
  title: string
}

export default function MainLayout({ children, title }: MainLayoutProps){

  const menuItems = [
    { id: 'dashboard', label: 'ダッシュボード', icon: '📊', path: '/dashboard' },
    { id: 'users', label: 'ユーザー管理', icon: '👥', path: '/users' },
    { id: 'settings', label: '設定', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={menuItems} />
      <MainContent title={title}>
        {children}
      </MainContent>
    </div>
  )
}