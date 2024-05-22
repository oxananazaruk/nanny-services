import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import { selectIsRefreshing } from './redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../src/pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(() =>
  import('../src/pages/FavoritesPage/FavoritesPage')
);

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="nannies" element={<NanniesPage />} />
        <Route
          path="favorites"
          element={<PrivateRoute component={FavoritesPage} redirectTo="/" />}
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
