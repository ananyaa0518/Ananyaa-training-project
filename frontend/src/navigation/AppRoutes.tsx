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
import Admin from '../pages/admin';
import AdminBlogs from '../pages/adminblogs';
import CreateBlog from '../pages/createblog';
import EditBlog from '../pages/editblog';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/blogs" element={<AdminBlogs />} />
      <Route path="/admin/blogs/create" element={<CreateBlog />} />
      <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsconditions" element={<TermsConditions />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
    </Routes>
  );
}
export default AppRoutes;


