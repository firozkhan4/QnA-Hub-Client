import { useContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import LoadingSpinner from './components/LoadingSpinner';
import { AuthContext } from './contexts/AuthContext';
import {
  Ask,
  Auth,
  Home,
  Layout,
  Logout,
  NotFound,
  PageLayout,
  Profile,
  Question,
  Questions,
  Saves,
  Tags,
} from './pages';

export default function Router() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const [showAdmin, setShowAdmin] = useState(false);
  useEffect(() => {
    if (isAdmin) {
      setShowAdmin(true);
    }
  }, [isAdmin]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PrivateRoute condition={!isAuthenticated} redirectTo="/">
            <Auth />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateRoute condition={!isAuthenticated} redirectTo="/">
            <Auth />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute condition={isAuthenticated} redirectTo="/">
            <Logout />
          </PrivateRoute>
        }
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
            <PrivateRoute condition={isAuthenticated} redirectTo="/login">
              <Ask />
            </PrivateRoute>
          }
        />
      </Route>

      <Route
        path="/profile"
        element={
          <PrivateRoute condition={isAuthenticated} redirectTo="/login">
            <Profile />
          </PrivateRoute>
        }
      />

      {showAdmin && (
        <Route
          path="/admin/*"
          element={isAdmin ? <AdminDashboard /> : <LoadingSpinner />}
        />
      )}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const PrivateRoute = ({ condition, redirectTo, children }) => {
  return condition ? children : <Navigate to={redirectTo} replace />;
};
