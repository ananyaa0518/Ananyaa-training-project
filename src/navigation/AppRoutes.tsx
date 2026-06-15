import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Pricing from '../pages/pricing';
import About from '../pages/about';
import Contact from '../pages/contact';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blogdetails';
import PrivacyPolicy from '../pages/privacypolicy';
import Feature from '../pages/feature';
import TermsConditions from '../pages/termsconditions';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsconditions" element={<TermsConditions />} />
    </Routes>
  );
}
export default AppRoutes;
