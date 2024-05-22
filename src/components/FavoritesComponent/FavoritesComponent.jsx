import { useEffect, useState } from 'react';
import { FiltersComponent } from '../FiltersComponent/FiltersComponent';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import {
  ListNannies,
  ListWrapper,
  LoadMoreBtn,
  WrappList,
} from './FavoritesComponent.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { sortedNannies } from '../../helpers/sortedNannies';

export const FavoritesComponent = ({ favorites }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedNannies, setDisplayedNannies] = useState([]);
  const filterOption = useSelector(selectFilter);
  const itemsPerPage = 3;

  const loadNannies = (page, array) => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return array.slice(start, end);
  };

  // useEffect(() => {
  //   setDisplayedNannies(loadNannies(0, favorites));
  //   setCurrentPage(1);
  // }, [favorites]);

  useEffect(() => {
    const totalPages = currentPage + 1;
    const allNannies = [];
    for (let page = 0; page < totalPages; page++) {
      allNannies.push(...loadNannies(page, favorites));
    }
    setDisplayedNannies(allNannies);
  }, [favorites, currentPage]);

  const loadMoreNannies = () => {
    setDisplayedNannies((prevNannies) => [
      ...prevNannies,
      ...loadNannies(currentPage + 1, favorites),
    ]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const visibleFavorites = sortedNannies(displayedNannies, filterOption);

  return (
    <>
      <ListWrapper>
        <WrappList>
          <FiltersComponent />

          {visibleFavorites.length > 0 ? (
            <ListNannies>
              {visibleFavorites.map((nanny) => (
                <li key={nanny.id}>
                  <NanniesCard nanny={nanny} />
                </li>
              ))}
            </ListNannies>
          ) : (
            <p>No nannies to show</p>
          )}
        </WrappList>

        {currentPage * itemsPerPage < favorites.length ? (
          <LoadMoreBtn type="button" onClick={loadMoreNannies}>
            Load more
          </LoadMoreBtn>
        ) : (
          <p>These are all babysitters you liked</p>
        )}
      </ListWrapper>
    </>
  );
};
