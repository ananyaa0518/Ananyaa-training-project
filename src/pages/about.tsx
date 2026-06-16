import design from '../assets/image/design.jpeg';
function About() {
  return (
    <>
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
            We built the POS we always
            <br />
            <span className="text-[#F4D6A6]">wished existed.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[650px] text-[18px] leading-8 text-[#B8C6D9]">
            JRpos is the flagship product of SEEN Pty Ltd — an Australian
            technology company making enterprise-grade tools accessible to every
            business, everywhere.
          </p>
        </div>
      </section>
    </>
  );
}
export default About;
