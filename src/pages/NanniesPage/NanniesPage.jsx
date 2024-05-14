import { useEffect } from 'react';
import { NanniesList } from '../../components/NanniesList/NanniesList';
import { fetchNannies } from '../../redux/nannies/operations';
import { useDispatch } from 'react-redux';

const NanniesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNannies());
  }, [dispatch]);

  return <NanniesList />;
};

export default NanniesPage;
