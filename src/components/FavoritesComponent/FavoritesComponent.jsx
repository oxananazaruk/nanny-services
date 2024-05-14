import { FiltersComponent } from '../FiltersComponent/FiltersComponent';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import {
  HeaderBlock,
  ListNannies,
  ListWrapper,
  LoadMoreBtn,
  WrappList,
  WrappNannies,
} from './FavoritesComponent.styled';

export const FavoritesComponent = ({ favorites }) => {
  return (
    <>
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
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
        </div>
      </WrappNannies>
    </>
  );
};
