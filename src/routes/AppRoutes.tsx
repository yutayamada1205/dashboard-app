import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}