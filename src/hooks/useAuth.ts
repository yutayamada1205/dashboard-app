import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthはAuthProviderの内側でのみ使用できます')
  }
  return context
}