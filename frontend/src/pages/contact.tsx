import design from '../assets/image/design.jpeg';
import ContactCard from '../components/ui/contactcard';

import whatsapp from '../assets/icons/whatsapp.png';
import email from '../assets/icons/email.png';
import zoom from '../assets/icons/zoom.png';

function Contact() {
  return (
    <>
      <section className="relative min-h-[400px] md:min-h-[520px] overflow-hidden bg-[#163B69]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D5E9E_0%,#163B69_65%,#12345B_100%)]" />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${design})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 flex min-h-[400px] md:min-h-[520px] items-center justify-center px-6 sm:px-8 text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-white">
              We're here to help your
              <br />
              <span className="text-[#F4D6A6]">business succeed.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[650px] text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#B8C6D9]">
              Whether you have a question about pricing, need help getting
              started, or want to discuss a custom plan — our team is available
              24/7 and genuinely happy to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EFE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[720px_420px] lg:justify-center">
            <div className="rounded-[24px] bg-white p-6 sm:p-12 shadow-sm">
              <h2 className="mb-3 text-3xl sm:text-[36px] font-bold text-[#3B3F4A] leading-tight">
                How can we help you?
              </h2>

              <p className="mb-10 text-sm sm:text-[15px] leading-relaxed text-[#8A8A8A]">
                Fill in the form and we'll get back to you within 24 hours. For
                urgent help, use WhatsApp below.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3B3F4A]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    className="h-[56px] w-full rounded-lg border border-[#D8D8D8] px-4 outline-none focus:border-[#F4A300]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3B3F4A]">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    className="h-[56px] w-full rounded-lg border border-[#D8D8D8] px-4 outline-none focus:border-[#F4A300]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3B3F4A]">
                    Email *
                  </label>

                  <input
                    type="email"
                    className="h-[56px] w-full rounded-lg border border-[#D8D8D8] px-4 outline-none focus:border-[#F4A300]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3B3F4A]">
                    Company (Optional)
                  </label>

                  <input
                    type="text"
                    className="h-[56px] w-full rounded-lg border border-[#D8D8D8] px-4 outline-none focus:border-[#F4A300]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3B3F4A]">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Enter your message"
                    className="w-full rounded-lg border border-[#D8D8D8] px-4 py-4 outline-none focus:border-[#F4A300]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-[56px] w-full rounded-lg bg-[#F4A300] font-semibold text-white transition hover:bg-[#E59A00] cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-3 text-3xl sm:text-[36px] font-bold text-[#3B3F4A] leading-tight">
                Other ways to connect
              </h2>

              <p className="mb-10 text-sm sm:text-[15px] leading-relaxed text-[#8A8A8A]">
                Choose the channel that works best for you. We're always happy
                to hear from you.
              </p>

              <div className="space-y-6">
                <ContactCard
                  icon={whatsapp}
                  title="WhatsApp"
                  description="Chat with our support team instantly, day or night, any time zone."
                />

                <ContactCard
                  icon={email}
                  title="Email"
                  description="Send a detailed message to support@jrpos.app and hear back within 24 hours."
                />

                <ContactCard
                  icon={zoom}
                  title="Live Zoom demo"
                  description="Join a monthly live session where the JRPOS team walks you through the platform."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <h2 className="mb-12 text-center text-3xl sm:text-[40px] font-bold text-[#2F3540] leading-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#F4E2C0] bg-[#FFF8EC] px-6 py-6 sm:px-8">
              <h3 className="mb-3 text-lg font-semibold text-[#2F3540]">
                Why do I need to use a Design System?
              </h3>

              <p className="leading-relaxed text-[#6B7280]">
                Design systems help teams build consistent and scalable
                interfaces while improving development speed, collaboration,
                accessibility, and overall user experience.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white px-6 py-5 sm:px-8 text-sm sm:text-base font-semibold text-[#2F3540]">
              Is there a preview or a free trial available?
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white px-6 py-5 sm:px-8 text-sm sm:text-base font-semibold text-[#2F3540]">
              How many components are available?
            </div>

            <div className="rounded-xl border border-[#E5E5E5] bg-white px-6 py-5 sm:px-8 text-sm sm:text-base font-semibold text-[#2F3540]">
              Are there sector-specific dashboards and widgets available?
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
