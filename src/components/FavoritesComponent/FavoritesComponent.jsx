import { useEffect, useState } from 'react';
import { FiltersComponent } from '../FiltersComponent/FiltersComponent';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import {
  ListNannies,
  ListWrapper,
  LoadMoreBtn,
  WrappList,
} from './FavoritesComponent.styled';

export const FavoritesComponent = ({ favorites }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedNannies, setDisplayedNannies] = useState([]);
  const itemsPerPage = 3;

  const loadNannies = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return favorites.slice(start, end);
  };

  useEffect(() => {
    setDisplayedNannies(loadNannies(0));
    setCurrentPage(1);
  }, []);

  const loadMoreNannies = () => {
    setDisplayedNannies((prevNannies) => [
      ...prevNannies,
      ...loadNannies(currentPage),
    ]);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ListWrapper>
        <WrappList>
          <FiltersComponent />

          <ListNannies>
            {displayedNannies.map((nanny) => (
              <li key={nanny.id}>
                <NanniesCard nanny={nanny} />
              </li>
            ))}
          </ListNannies>
        </WrappList>

        <LoadMoreBtn type="button" onClick={loadMoreNannies}>
          Load more
        </LoadMoreBtn>
      </ListWrapper>
    </>
  );
};
