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
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
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

export default App;
