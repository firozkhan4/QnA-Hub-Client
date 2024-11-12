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
} from './pages/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

export default function Router() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path={'/auth'}
        element={isAuthenticated ? <Navigate to={'/'} replace /> : <Auth />}
      />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="questions" element={<Questions />} />
          <Route path="tags" element={<Tags />} />
          <Route path="saves" element={<Saves />} />
        </Route>
        <Route path="ask" element={<Ask />} />
      </Route>
    </Routes>
  );
}
