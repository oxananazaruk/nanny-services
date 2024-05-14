import {
  HeaderBlock,
  ListWrapper,
  LoadMoreBtn,
  NannyList,
  WrappList,
  WrappNannies,
} from './NanniesList.styled';
import { NanniesCard } from '../NanniesCard/NanniesCard';
import { useSelector } from 'react-redux';
import { selectMessage } from '../../redux/nannies/selectors';
import { FiltersComponent } from '../FiltersComponent/FiltersComponent';

export const NanniesList = ({ nannies, loadMore }) => {
  const message = useSelector(selectMessage);

  return (
    <>
      <HeaderBlock />
      <WrappNannies>
        <div className="container">
          <ListWrapper>
            <WrappList>
              <FiltersComponent />

              <NannyList>
                {nannies.map((nanny) => (
                  <li key={nanny.id}>
                    <NanniesCard nanny={nanny} />
                  </li>
                ))}
              </NannyList>
            </WrappList>

            {message ? (
              <p>{message}</p>
            ) : (
              <LoadMoreBtn type="button" onClick={loadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </ListWrapper>
        </div>
      </WrappNannies>
    </>
  );
};
