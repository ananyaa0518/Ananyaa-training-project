import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/">
          <img src="/logo.png" alt="JR POS" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-10">
          <Link to="/features" className="font-medium text-[#163b69]">
            Features
          </Link>

          <Link to="/pricing" className="font-medium">
            Pricing
          </Link>

          <Link to="/about" className="font-medium">
            About Us
          </Link>

          <Link to="/blog" className="font-medium">
            Blog
          </Link>

          <Link to="/contact" className="font-medium">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="font-semibold">
            Log In
          </Link>

          <button className="rounded-lg bg-[#F4A300] px-6 py-3 font-semibold text-black">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
