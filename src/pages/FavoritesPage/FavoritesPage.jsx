import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <FavoritesComponent favorites={favorites} />
      ) : (
        <h2>There are no favorite adverts yet... </h2>
      )}
    </>
  );
};

export default FavoritesPage;
