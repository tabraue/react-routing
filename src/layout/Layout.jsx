import Header from './../components/Header/Header.jsx';
import Footer from './../components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const title = 'La Recetitas de Diana';
  return (
    <>
      <Header title={title} />
      <Outlet />
      <Footer title={title} />
    </>
  );
};

export default Layout;
