import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import AppRoutes from './navigation/AppRoutes';
import Footer from './components/layout/footer';
import Newsletter from './components/ui/newsletter';
import CTA from './components/ui/cta';

function App() {
  const location = useLocation();

  const hideLayout = location.pathname === '/login';

  return (
    <>
      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && (
        <>
          <Newsletter />
          <CTA />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
