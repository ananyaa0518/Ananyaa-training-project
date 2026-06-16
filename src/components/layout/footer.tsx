import { Link } from 'react-router-dom';
import qrCode from '../../assets/icons/qrcode.jpeg';
import googlePlay from '../../assets/icons/google-play.jpeg';
import appStore from '../../assets/icons/apple.jpeg';

function Footer() {
  const features = ['Stock', 'Expense', 'Income', 'Products'];

  return (
    <footer className="bg-[#173B69] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="mb-3 text-3xl font-bold">JR POS</h2>

            <p className="mb-6 text-sm leading-6 text-gray-300">
              The enterprise POS platform built for ambitious retailers.
              Unlimited users. Unlimited potential.
            </p>

            <div className="w-fit rounded-lg bg-[#214B7A] p-4">
              <p className="mb-2 text-xs text-gray-300">
                Scan to watch demo videos
              </p>

              <img src={qrCode} alt="QR Code" className="h-20 w-20" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#F4A300]">
              Features
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              {features.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#F4A300]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/termsconditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#F4A300]">
              Download App
            </h3>

            <p className="mb-6 text-sm leading-6 text-gray-300">
              Experience faster, smarter, and seamless mobile access.
            </p>

            <div className="flex items-center gap-3">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 cursor-pointer"
              />

              <img
                src={appStore}
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>{' '}
        {/* ← grid closes HERE */}
        <div className="mt-10 border-t border-[#2B537F] pt-6">
          <p className="text-xs text-gray-400">
            © 2026 JR POS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
