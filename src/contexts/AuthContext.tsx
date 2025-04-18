import { createContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

// モックユーザー情報
const mockUser = {
  id: '1',
  name: 'Yamada Yuta',
  email: 'yamada@example.com',
  password: 'password'
}

// デフォルト値の定義
const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => {
    throw new Error('loginはAuthProviderの内側でのみ使用できます')
  },
  logout: () => {
    throw new Error('logoutはAuthProviderの内側でのみ使用できます')
  },
  isAuthenticated: false
}

// コンテキストを作成
export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

// 認証プロバイダーを作成
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // ローカルストレージからユーザー情報を取得
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  // ログイン処理
  const login = (email: string, password: string) => {
    if (email === mockUser.email && password === mockUser.password) {
      const authenticatedUser = {
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email
      }
      setUser(authenticatedUser)
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(authenticatedUser))
      return true
    }
    return false
  }

  // ログアウト処理
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  // 認証プロバイダーを提供
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}