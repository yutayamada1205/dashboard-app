import { useState } from "react"

type MenuItem = {
  id: string
  label: string
  icon: string
  path: string
}

type SidebarProps = {
  menuItems: MenuItem[]
}

export default function Sidebar({ menuItems }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

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
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 hover:bg-gray-600 
            transition-all duration-300 transform ${
              isCollapsed ? "rotate-180" : ""
            }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* メニューエリア */}
      <nav className="mt-8">
        <ul className="px-3 space-y-2">
          {menuItems.map((item) => (
            <li key={item.id} className="hover:bg-gray-700">
              <button
                className={`flex items-center w-full ${
                  isCollapsed ? "justify-center py-4" : "py-3 px-4"
                }`}
              >
                <span
                  className={`flex items-center justify-center text-xl ${
                    !isCollapsed && "mr-3"
                  }`}
                >
                  {item.icon}
                </span>

                {!isCollapsed && (
                  <span className="font-medium max-[1000px]:hidden">
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
