import './App.css'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <MainLayout title="ダッシュボード">
      <Dashboard />
    </MainLayout>
  );
}