import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
