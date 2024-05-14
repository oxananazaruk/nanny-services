import { useEffect } from 'react';
import { NanniesList } from '../../components/NanniesList/NanniesList';
import { fetchNannies } from '../../redux/nannies/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastKey, selectNannies } from '../../redux/nannies/selectors';
import { selectFilter } from '../../redux/filters/selectors';

const NanniesPage = () => {
  const dispatch = useDispatch();
  const nannies = useSelector(selectNannies);
  const lastKey = useSelector(selectLastKey);
  const filterOption = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchNannies({ limit: 3 }));
  }, [dispatch]);

  const loadMore = () => {
    dispatch(fetchNannies({ limit: 3, lastKey }));
  };

  const sortedNannies = (nannies, filterOption) => {
    let filteredNannies = [...nannies];

    switch (filterOption) {
      case 'A to Z':
        filteredNannies.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z to A':
        filteredNannies.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Less than 10$':
        filteredNannies = filteredNannies.filter(
          (nanny) => nanny.price_per_hour < 10
        );
        break;
      case 'Greater than 10$':
        filteredNannies = filteredNannies.filter(
          (nanny) => nanny.price_per_hour > 10
        );
        break;
      case 'Popular':
        filteredNannies.sort((a, b) => b.rating - a.rating);
        break;
      case 'Not popular':
        filteredNannies.sort((a, b) => a.rating - b.rating);
        break;
      case 'Show all':
        break;
      default:
        break;
    }

    return filteredNannies;
  };

  const visibleNannies = sortedNannies(nannies, filterOption);

  return <NanniesList nannies={visibleNannies} loadMore={loadMore} />;
};

export default NanniesPage;
