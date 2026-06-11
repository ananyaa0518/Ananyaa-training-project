function Newsletter() {
  return (
    <section className="bg-[#F7F7F7] py-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <div>
          <h2 className="text-6xl font-bold text-[#444B55]">
            Stay in the loop.
          </h2>

          <p className="mt-4 max-w-xl text-xl text-gray-500">
            Join 5,000+ founders receiving weekly insights on retail scaling and
            operations.
          </p>
        </div>

        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[350px] border border-gray-300 px-6 py-4"
          />

          <button className="bg-[#F4A300] px-8 text-white">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
