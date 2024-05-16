import { useEffect } from 'react';
import { NanniesList } from '../../components/NanniesList/NanniesList';
import { fetchNannies } from '../../redux/nannies/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectLastKey,
  selectNannies,
} from '../../redux/nannies/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import { sortedNannies } from '../../helpers/sortedNannies';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const lastKey = useSelector(selectLastKey);
  const filterOption = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNannies({ limit: 3 }));
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchNannies({ limit: 3, lastKey }));
  };

  const visibleNannies = sortedNannies(nannies, filterOption);

  return (
    <>
      <NanniesList nannies={visibleNannies} loadMore={loadMore} />
      {isLoading && <Loader />}
      {isError && <Error />}
    </>
  );
};

export default NanniesPage;
