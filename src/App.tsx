import Navbar from './components/layout/navbar';
import AppRoutes from './navigation/AppRoutes';
import Footer from './components/layout/footer';
import Newsletter from './components/ui/newsletter';
import CTA from './components/ui/cta';
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
