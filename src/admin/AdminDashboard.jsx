import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Notification } from '../components';
import { NotificationContext } from '../contexts/NotificationContext';
import AnswerManagement from './AnswerManagement';
import DashboardHome from './DashboardHome';
import Header from './Header';
import QuestionsManagement from './QuestionsManagement';
import Sidebar from './Sidebar';
import UsersManagement from './UsersManagement';

export default function AdminDashboard() {
  const { showNotification } = useContext(NotificationContext);
  return (
    <div className="">
      {showNotification && <Notification />}
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/questions" element={<QuestionsManagement />} />
              <Route path="/answers" element={<AnswerManagement />} />
              <Route path="/users" element={<UsersManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
