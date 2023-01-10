import './App.css';
import { AdminDashboard } from './admin/admin';
import { EditWebPageDesign } from './pages/websites/editWebSite';
import { Routes, Route } from 'react-router-dom';
import { AdminDashboardPage } from './pages/admin/admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/edit-webpage-design" element={<EditWebPageDesign />} />
      <Route path='/home' element={<AdminDashboardPage />} />
      <Route />
    </Routes>
  );
}

export default App;
