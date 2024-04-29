import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
// import { GlobalStyle } from "../../GlobalStyles";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
