function HeroSection() {
  return (
    <section className="bg-[#173b68] text-white py-20">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <div>
          <p className="text-sm mb-4">Retail Management Platform</p>

          <h1 className="text-5xl font-bold mb-4">
            Scale Ambition
            <br />
            with Unlimited Users.
          </h1>

          <p className="mb-6 max-w-md">
            Manage inventory, sales, customers and reporting from a single
            platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 px-4 py-2">Start Free</button>

            <button className="border px-4 py-2">Learn More</button>
          </div>
        </div>

        <img src="/hero.png" alt="dashboard" className="w-[400px]" />
      </div>
    </section>
  );
}

export default HeroSection;
