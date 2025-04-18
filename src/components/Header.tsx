import { Power } from "lucide-react"
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  return (
    <header className="bg-gray-800 text-white h-16 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">管理画面</h1>
      </div>
      
      <div className="flex items-center space-x-4">
          <div className="mr-2 text-sm">
            <span className="text-gray-500 mr-2">ようこそ</span>
            <span className="font-medium">{user?.name}</span>
            <span className="text-gray-500 ml-2">さん</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full text-sm transition-colors"
          >
            <Power className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}