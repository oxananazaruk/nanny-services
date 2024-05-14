import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { GlobalStyle } from '../../GlobalStyles';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
          <Toaster position="top-right" reverseOrder={false} />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
