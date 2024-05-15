import { FiltersComponent } from '../FiltersComponent/FiltersComponent';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import {
  ListNannies,
  ListWrapper,
  LoadMoreBtn,
  WrappList,
} from './FavoritesComponent.styled';

export const FavoritesComponent = ({ favorites }) => {
  return (
    <>
      <ListWrapper>
        <WrappList>
          <FiltersComponent />

          <ListNannies>
            {favorites.map((nanny) => (
              <li key={nanny.id}>
                <NanniesCard nanny={nanny} />
              </li>
            ))}
          </ListNannies>
        </WrappList>

        <LoadMoreBtn type="button">Load more</LoadMoreBtn>
      </ListWrapper>
    </>
  );
};
