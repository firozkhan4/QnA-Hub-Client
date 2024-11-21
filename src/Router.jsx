import { useContext } from 'react';
import {
  Auth,
  Ask,
  Layout,
  Saves,
  Home,
  Questions,
  Tags,
  PageLayout,
  Question,
  Logout,
  NotFound,
} from './pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import AdminDashboard from './admin/AdminDashboard';

export default function Router() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path={'/login'}
        element={isAuthenticated ? <Navigate to={'/'} replace /> : <Auth />}
      />
      <Route
        path={'/register'}
        element={isAuthenticated ? <Navigate to={'/'} replace /> : <Auth />}
      />
      <Route
        path={'/logout'}
        element={isAuthenticated ? <Logout /> : <Navigate to={'/'} replace />}
      />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<Questions />} />
          <Route path="questions/:id" element={<Question />} />
          <Route path="tags" element={<Tags />} />
          <Route path="saves" element={<Saves />} />
        </Route>
        <Route
          path="ask"
          element={
            isAuthenticated ? <Ask /> : <Navigate to={'/login'} replace />
          }
        />
      </Route>
      <Route path="/*" element={<NotFound />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  );
}
