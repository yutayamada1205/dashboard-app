import { useState } from "react"
import { LucideIcon, ChevronsLeft, BarChart, Users, Settings } from "lucide-react"
import { Link } from "react-router-dom"

type MenuItem = {
  id: string
  label: string
  icon: LucideIcon 
  path: string
}

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'ダッシュボード', icon: BarChart, path: '/' },
    { id: 'users', label: 'ユーザー管理', icon: Users, path: '/users' },
    { id: 'settings', label: '設定', icon: Settings, path: '/settings' },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white h-screen drop-shadow-xl
        transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-64"
        } max-[1000px]:w-20`}
    >
      {/* タイトルエリア */}
      <div className="px-5 py-6 flex items-center justify-between max-[1000px]:hidden">
        {!isCollapsed && (
          <h2 className="text-xl font-bold">
            メニュー
          </h2>
        )}
        <a
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 hover:bg-gray-600 
            transition-all duration-300 transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
        >
          <ChevronsLeft className="h-5 w-5" />
        </a>
      </div>

      {/* メニューエリア */}
      <nav className="mt-8">
        <ul className="px-3 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
              return (
                <li key={item.id} className="hover:bg-gray-700">
                  <Link
                    to={item.path}
                    className={`flex items-center w-full ${
                      isCollapsed ? "justify-center py-4" : "py-3 px-4"
                    }`}
                  >
                    <Icon
                      className={`flex items-center justify-center h-5 w-5 ${
                        !isCollapsed && "mr-3"
                      } max-[1000px]:mr-0`}
                    />

                    {!isCollapsed && (
                      <span className="font-medium max-[1000px]:hidden">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              )            
          })}
        </ul>
      </nav>
    </aside>
  )
}
