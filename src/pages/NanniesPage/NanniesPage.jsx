import { useEffect } from 'react';
import { NanniesList } from '../../components/NanniesList/NanniesList';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from '../../firebase';

const NanniesPage = () => {
  // useEffect(() => {
  //   const db = getFirestore(app);
  //   console.log(db);
  // }, []);
  return <NanniesList />;
};

export default NanniesPage;
