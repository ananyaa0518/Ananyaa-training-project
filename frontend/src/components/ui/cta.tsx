import Button from './button';

function CTA() {
  return (
    <section className="bg-[#F7F7F7] pb-16 md:pb-24 px-6 sm:px-8">
      <div className="mx-auto max-w-[1200px] rounded-xl bg-[#163B69] px-6 py-12 md:px-8 md:py-20 text-center">
        <p className="mb-5 text-[10px] md:text-[11px] font-semibold tracking-[4px] text-white/80">
          READY TO BUILD SOMETHING DIFFERENT?
        </p>

        <h2 className="mx-auto max-w-[700px] text-3xl md:text-[52px] font-bold leading-[1.1] text-white">
          Join thousands of retailers
          <br />
          who have <span className="text-[#F4A300]">made the switch.</span>
        </h2>

        <p className="mt-6 text-[10px] md:text-[12px] font-medium tracking-[2px] text-white/80">
          START YOUR 14-DAY FREE TRIAL TODAY.
          <span className="text-[#F4A300]"> NO CREDIT CARD REQUIRED.</span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
          <Button>View Price</Button>
          <Button variant="secondary">Get a Demo</Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
