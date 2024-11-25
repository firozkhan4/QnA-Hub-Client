import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import { AuthContext } from './contexts/AuthContext';
import {
  Ask,
  Auth,
  Home,
  Layout,
  Logout,
  NotFound,
  PageLayout,
  Question,
  Questions,
  Saves,
  Profile,
  Tags,
} from './pages';

export default function Router() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

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

      <Route
        path="/admin"
        element={
          <PrivateRoute condition={isAdmin} redirectTo="/not-authorized">
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

const PrivateRoute = ({ condition, redirectTo, children }) => {
  return condition ? children : <Navigate to={redirectTo} replace />;
};
