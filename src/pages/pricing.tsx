import design from '../assets/image/design.jpeg';

function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#163B69] py-28">
      {/* Blue gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D5E9E_0%,#163B69_65%,#12345B_100%)]" />

      {/* Design image */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${design})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-8 text-center">
        <h1 className="mx-auto whitespace-nowrap text-center text-[64px] font-bold leading-[1.05] text-white">
          Pick Your Catalogue Size.
          <br />
          <span className="text-[#F4D6A6]">Get Everything</span> Else Free.
        </h1>
        <p className="mx-auto mt-6 max-w-[650px] text-[18px] leading-8 text-[#B8C6D9]">
          Powerful cloud POS software built for startups, retailers,
          restaurants, wholesalers and enterprises — with unlimited users on
          every plan.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
