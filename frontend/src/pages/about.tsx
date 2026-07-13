import design from '../assets/image/design.jpeg';
import FeatureCard from '../components/ui/FeatureCard';
import StatCard from '../components/ui/statcard';

import {
  Store,
  Coffee,
  Shield,
  ShoppingCart,
  Wrench,
  Truck,
  Building,
  Globe,
} from 'lucide-react';

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#163B69] py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2D5E9E_0%,#163B69_65%,#12345B_100%)]" />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${design})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-white">
            We built the POS we always
            <br />
            <span className="text-[#F4D6A6]">wished existed.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#B8C6D9]">
            JRpos is the flagship product of SEEN Pty Ltd — an Australian
            technology company making enterprise-grade tools accessible to every
            business, everywhere.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:gap-16 px-6 sm:px-8 grid-cols-1 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-[#FFF4E3] px-4 py-2 text-sm text-[#F4A300]">
              Our story
            </span>

            <h2 className="mt-6 text-3xl sm:text-[48px] font-bold text-[#2F3540] leading-tight">
              Born from a simple frustration.
            </h2>

            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed sm:leading-9 text-[#6B7280]">
              <p>
                JRpos was born from a simple frustration: the best point-of-sale
                systems were either too expensive, too complicated, or both.
              </p>

              <p>
                We watched small business owners pay per-seat fees just to let
                their staff log in. We saw feature gates that forced growing
                businesses into expensive enterprise tiers for tools they needed
                on day one.
              </p>

              <p>
                So we built something different. JRpos brings enterprise-grade
                retail technology to every business — from a single market stall
                to a multi-site retail chain.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-xl border-l-4 border-[#F4A300] bg-[#FFF8EC] p-6 sm:p-8">
              <p className="text-base sm:text-lg italic text-[#2F3540]">
                “Every business deserves every feature, from day one, regardless
                of which plan they choose.”
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#6B7280]">
                The founding principle of JRpos
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border bg-white p-5 text-sm sm:text-base font-semibold">
                Unlimited users — always
              </div>

              <div className="rounded-xl border bg-white p-5 text-sm sm:text-base font-semibold">
                Setup in under 30 minutes
              </div>

              <div className="rounded-xl border bg-white p-5 text-sm sm:text-base font-semibold">
                No feature gates, ever
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EFE2] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <span className="rounded-full bg-[#FFF5E6] px-4 py-2 text-sm text-[#F4A300]">
            Who we serve
          </span>

          <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row">
            <h2 className="text-3xl sm:text-[48px] font-bold text-[#2F3540] leading-tight">
              Built for real businesses.
            </h2>

            <p className="max-w-[520px] text-base sm:text-lg leading-relaxed sm:leading-8 text-[#6B7280]">
              JRpos works for any business that sells products and needs a
              reliable, affordable point-of-sale system — from a solo market
              stall to a multi-site retail chain.
            </p>
          </div>

          <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              variant="light"
              icon={<Store size={20} className="text-[#F4A300]" />}
              title="Independent retailers"
              description="Boutiques & fashion stores"
            />

            <FeatureCard
              variant="light"
              icon={<Coffee size={20} className="text-[#F4A300]" />}
              title="Cafes & restaurants"
              description="Food service businesses"
            />

            <FeatureCard
              variant="light"
              icon={<Shield size={20} className="text-[#F4A300]" />}
              title="Pharmacies"
              description="Health product retailers"
            />

            <FeatureCard
              variant="light"
              icon={<ShoppingCart size={20} className="text-[#F4A300]" />}
              title="Supermarkets"
              description="Wholesale operations"
            />

            <FeatureCard
              variant="light"
              icon={<Wrench size={20} className="text-[#F4A300]" />}
              title="Hardware stores"
              description="Trade suppliers"
            />

            <FeatureCard
              variant="light"
              icon={<Truck size={20} className="text-[#F4A300]" />}
              title="Mobile vendors"
              description="Market stalls & pop-up stores"
            />

            <FeatureCard
              variant="light"
              icon={<Building size={20} className="text-[#F4A300]" />}
              title="Multi-site chains"
              description="Franchise operations"
            />

            <FeatureCard
              variant="light"
              icon={<Globe size={20} className="text-[#F4A300]" />}
              title="Any business"
              description="Selling products anywhere"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <div className="text-center">
            <span className="rounded-full bg-[#FFF4E3] px-5 py-2 text-sm font-medium text-[#C88719]">
              Who we are
            </span>

            <h2 className="mt-6 text-3xl sm:text-[48px] font-bold text-[#3F434D] leading-tight">
              The principles we build by.
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#8A8A8A]">
              Six values that shape every decision we make about product,
              pricing, and support.
            </p>
          </div>

          <div className="mt-16 overflow-hidden border border-[#D8A24D] rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y divide-[#D8A24D] lg:divide-[#D8A24D]">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#D8A24D]">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Fairness
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  Every business deserves full-featured tools — not a
                  watered-down version designed to push them to a higher tier.
                </p>
              </div>

              <div className="p-8 border-b md:border-b-0 lg:border-r border-[#D8A24D]">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Simplicity
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  A POS should take minutes to learn, not weeks. We design for
                  real business owners, not IT departments.
                </p>
              </div>

              <div className="p-8 border-b lg:border-b-0 border-[#D8A24D]">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Accessibility
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  47+ languages, multi-currency, iOS, Android and Web. JRpos
                  works for businesses anywhere in the world.
                </p>
              </div>

              <div className="p-8 border-b md:border-b-0 md:border-r border-[#D8A24D] lg:border-t">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Partnership
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  24/7 WhatsApp support, monthly live Zoom demos, and a team
                  that genuinely wants your business to succeed.
                </p>
              </div>

              <div className="p-8 border-b md:border-b-0 lg:border-r border-[#D8A24D] lg:border-t">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Transparency
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  No hidden fees. No surprise charges. No feature gates. What
                  you see on the pricing page is exactly what you get.
                </p>
              </div>

              <div className="p-8 lg:border-t">
                <h3 className="mb-4 text-[18px] font-semibold text-[#3F434D]">
                  Innovation
                </h3>

                <p className="text-[15px] leading-relaxed text-[#7A7A7A]">
                  AI product search, product location mapping, and a roadmap
                  packed with features that keep JRpos ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173B69] py-12">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 sm:px-8 lg:grid-cols-4">
          <StatCard value="5,000+" label="Active Retailers" />
          <StatCard value="$2.1B" label="Processed Annually" />
          <StatCard value="99.9%" label="Platform Uptime" />
          <StatCard value="∞" label="Users on every plan" />
        </div>
      </section>
    </>
  );
}

export default About;
