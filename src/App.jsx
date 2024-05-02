import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../src/pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() =>
  import('../src/pages/FavoritesPage/FavoritesPage')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
