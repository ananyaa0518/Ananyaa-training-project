function Newsletter() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-20">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 max-w-7xl gap-8 lg:gap-12 text-center lg:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#444B55]">
            Stay in the loop.
          </h2>

          <p className="mt-4 max-w-xl text-base md:text-xl text-gray-500">
            Join 5,000+ founders receiving weekly insights on retail scaling and
            operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-md shrink-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] border border-gray-300 px-6 py-4 outline-none focus:border-[#F4A300]"
          />

          <button className="bg-[#F4A300] px-8 py-4 sm:py-0 text-white font-semibold cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
