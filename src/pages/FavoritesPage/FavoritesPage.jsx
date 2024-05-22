import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';
import { ErrorFav, HeaderBlock, WrappNannies } from './FavoritesPage.styled';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
          {favorites.length > 0 ? (
            <FavoritesComponent favorites={favorites} />
          ) : (
            <ErrorFav>There are no favorites yet... </ErrorFav>
          )}
        </div>
      </WrappNannies>
    </>
  );
};

export default FavoritesPage;
