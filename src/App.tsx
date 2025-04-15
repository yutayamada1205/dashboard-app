import './App.css'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}