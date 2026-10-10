import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from '../footer';

function NavFooter() {
  return (
    <>
      <Navigation />
      <main style={{ paddingBottom: '10ex' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default NavFooter;