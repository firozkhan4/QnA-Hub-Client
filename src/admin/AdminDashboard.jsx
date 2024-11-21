import { Route, Routes } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import Header from './Header';
import QuestionsManagement from './QuestionsManagement';
import Sidebar from './Sidebar';
import UsersManagement from './UsersManagement';
import AnswerManagement from './AnswerManagement';
import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';
import { Notification } from '../components';

const AdminDashboard = () => {
  const { showNotification, handleNotification } =
    useContext(NotificationContext);
  return (
    <div className="">
      <div className="">{showNotification && <Notification />}</div>
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
};

export default AdminDashboard;
