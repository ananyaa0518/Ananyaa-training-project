import design from '../assets/image/design.jpeg';

function Feature() {
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
        <h1 className="mx-auto max-w-[700px] text-[64px] font-bold leading-[68px] text-white">
          Every Tool Your Business
          <span className="text-[#FFDDB8]"> Needs.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[650px] text-[18px] leading-8 text-[#B8C6D9]">
          Unlike other POS systems that lock features behind higher tiers, every
          JRpos feature is included in every plan — from the free trial to
          Enterprise. The only difference between plans is the size of your
          product catalogue
        </p>
      </div>
    </section>
  );
}

export default Feature;
