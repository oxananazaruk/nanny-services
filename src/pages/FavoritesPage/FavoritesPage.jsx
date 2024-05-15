import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { FavoritesComponent } from '../../components/FavoritesComponent/FavoritesComponent';
import { ErrorFav, HeaderBlock, WrappNannies } from './FavoritesPage.styled';
import { sortedNannies } from '../../helpers/sertedNannies';
import { selectFilter } from '../../redux/filters/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const filterOption = useSelector(selectFilter);

  const visibleNannies = sortedNannies(favorites, filterOption);
  return (
    <>
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
          {favorites.length > 0 ? (
            <FavoritesComponent favorites={visibleNannies} />
          ) : (
            <ErrorFav>There are no favorite yet... </ErrorFav>
          )}
        </div>
      </WrappNannies>
    </>
  );
};

export default FavoritesPage;
