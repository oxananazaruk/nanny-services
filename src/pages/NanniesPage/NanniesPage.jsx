import { useEffect } from 'react';
import { NanniesList } from '../../components/NanniesList/NanniesList';
import { fetchNannies } from '../../redux/nannies/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastKey, selectNannies } from '../../redux/nannies/selectors';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const lastKey = useSelector(selectLastKey);

  useEffect(() => {
    dispatch(fetchNannies({ limit: 3 }));
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchNannies({ limit: 3, lastKey }));
  };

  return <NanniesList nannies={nannies} loadMore={loadMore} />;
};

export default NanniesPage;
