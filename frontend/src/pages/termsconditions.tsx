import design from '../assets/image/design.jpeg';

function TermsConditions() {
  return (
    <>
      <section className="relative min-h-[300px] md:min-h-[420px] overflow-hidden bg-[#1A3A5C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D5E9E_0%,#163B69_65%,#12345B_100%)]" />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${design})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 flex min-h-[300px] md:min-h-[420px] items-center justify-center px-6 sm:px-8 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-tight">
              Terms &<span className="text-[#F4D6A6]"> Conditions</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8 text-[#6B7280]">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                1. Introduction
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                Welcome to JRPOS. These Terms & Conditions govern your use of
                our platform, products, and services. By accessing or using
                JRPOS, you agree to comply with these terms.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                2. Use of Services
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                Users are responsible for maintaining account confidentiality
                and ensuring that all information provided is accurate and up to
                date.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                3. Payments & Billing
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                Subscription fees are billed according to the selected plan.
                Failure to make payments may result in suspension or termination
                of services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                4. Intellectual Property
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                All software, trademarks, content, and designs are the property
                of JRPOS and may not be copied or redistributed without
                permission.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                5. Limitation of Liability
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                JRPOS shall not be liable for indirect, incidental, or
                consequential damages arising from the use of our services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                6. Termination
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                We reserve the right to suspend or terminate accounts that
                violate these terms or engage in unauthorized activities.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                7. Changes to Terms
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                These terms may be updated periodically. Continued use of our
                platform constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[24px] font-bold text-[#2D3748]">
                8. Contact Us
              </h2>
              <p className="text-base sm:text-lg leading-relaxed sm:leading-9">
                If you have any questions regarding these Terms & Conditions,
                contact us at:
                <span className="font-semibold text-[#163B69]">
                  {' '}
                  support@jrpos.app
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsConditions;
