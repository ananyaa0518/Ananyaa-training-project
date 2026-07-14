import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b relative z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/">
          <img src={logo} alt="JR POS" className="h-12 w-auto" />
        </Link>
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
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
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link to="/login" className="font-semibold">
            Log In
          </Link>
          <button className="rounded-lg bg-[#F4A300] px-6 py-3 font-semibold text-black cursor-pointer">
            Start Free
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none cursor-pointer"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white absolute top-20 left-0 right-0 py-6 px-6 flex flex-col gap-4 shadow-lg">
          <Link
            to="/features"
            onClick={() => setIsOpen(false)}
            className="font-medium text-[#163b69]"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            About Us
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Contact
          </Link>
          <hr className="my-2 border-gray-150" />
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="font-semibold"
          >
            Log In
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-[#F4A300] px-6 py-3 font-semibold text-black text-center cursor-pointer"
          >
            Start Free
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
