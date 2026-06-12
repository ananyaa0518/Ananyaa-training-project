function Footer() {
  return (
    <footer className="bg-[#123C6B] text-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-2 text-2xl font-bold">JR POS</h2>
            <p className="mb-4 text-sm text-gray-300">
              The enterprise POS platform built for ambitious retailers.
              Unlimited users. Unlimited potential.
            </p>
            <div className="w-fit rounded-lg bg-[#2B537F] p-3">
              <p className="mb-2 text-sm font-medium">
                Scan to see our demo videos
              </p>
              <div className="h-16 w-16 bg-white"></div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-orange-400">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Stock</li>
              <li>Expense</li>
              <li>Income</li>
              <li>Products</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-orange-400">
              Download App
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              Experience faster, smarter, and seamless mobile access.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="rounded bg-white px-3 py-2 text-sm text-black">
                Google Play
              </button>
              <button className="rounded bg-white px-3 py-2 text-sm text-black">
                App Store
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-blue-400 pt-4">
          <p className="text-xs text-gray-300">
            © 2026 JRPOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
