import design from '../assets/image/design.jpeg';
import PricingCard from '../components/ui/pricingcard';

function Pricing() {
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
            Pick Your Catalogue Size.
            <br />
            <span className="text-[#F4D6A6]">Get Everything</span> Else Free.
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#B8C6D9]">
            Powerful cloud POS software built for startups, retailers,
            restaurants, wholesalers and enterprises — with unlimited users on
            every plan.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F2EA] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <p className="text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            TRANSPARENT PRICING
          </p>

          <h2 className="mt-4 text-center text-3xl sm:text-4xl lg:text-[56px] font-bold leading-tight text-[#444B55]">
            One price for all features.
            <br />
            Upgrade as <span className="text-[#F4A300]">inventory grows.</span>
          </h2>

          <p className="mt-4 text-center text-[#7A7A7A] text-sm md:text-base">
            No hidden fees. No per-user charges. Ever.
          </p>

          <div className="mt-4 flex justify-center items-center gap-3 text-sm text-[#7A7A7A]">
            <span>Monthly</span>
            <div className="h-4 w-8 rounded-full bg-[#163B69] relative">
              <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-[#F4A300]" />
            </div>
            <span>Annual</span>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <PricingCard
              category="FREE"
              title="30-DAY TRIAL"
              price="$0"
              subtitle="NO PAYMENT REQUIRED • 30-DAY FREE TRIAL"
              buttonText="GET STARTED FREE"
              features={[
                'Full access to all JRpos features for 30 days',
                'Unlimited users — your whole team can log in',
                'Multi-currency & 47+ language support',
                'Sales, inventory, expense & income modules',
                'Customer Due List & loyalty programme',
                'WhatsApp receipt delivery',
                'Monthly Live Zoom Demo included',
              ]}
            />

            <PricingCard
              category="STARTUP"
              title="MICRO-BUSINESSES & SOLE TRADERS"
              price="$20.90"
              subtitle="100 PRODUCTS • UNLIMITED USERS • 30D BILLING"
              buttonText="GET STARTED"
              badge="MOST POPULAR"
              featured
              features={[
                'Up to 100 products in your catalogue',
                'Unlimited users — no per-seat charges',
                'All JRpos features fully included',
                'Multi-currency & 47+ language support',
                'Sales, POS, inventory & reporting',
                'Customer Due List & loyalty points',
                'WhatsApp 24/7 support',
                'Monthly Live Zoom Demo',
                'Lifetime free updates & new features',
              ]}
            />

            <PricingCard
              category="MIDSIZE"
              title="RETAIL, RESTAURANTS & CAFES"
              price="$33.00"
              subtitle="RETAIL, RESTAURANTS & CAFES"
              buttonText="GET STARTED"
              features={[
                'Up to 1,000 products in your catalogue',
                'Unlimited users — no per-seat charges',
                'All JRpos features fully included',
                'Multi-currency & 47+ language support',
                'Full sales, POS & supplier management',
                'Advanced reporting',
                'Customer Due List & subscriptions',
                'AI Product Search configuration',
                'Product Location Maps',
              ]}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <PricingCard
              category="ENTERPRISE"
              title="LARGE BUSINESS"
              price="$64.90"
              subtitle="SUPERMARKETS & MULTI-SITE OPS"
              buttonText="GET STARTED"
              features={[
                'Up to 10,000 products',
                'Unlimited users',
                'All JRpos features fully included',
                'Multi-location stock transfers',
                'Advanced reporting',
                'AI Product Search & Location Maps',
              ]}
            />

            <PricingCard
              category="CUSTOM"
              title="CONTACT US"
              price="POA"
              subtitle="PRICE ON APPLICATION"
              buttonText="GET STARTED"
              features={[
                'Unlimited products & users',
                'Custom feature development',
                'White-label branding',
                'Custom API integrations',
                'SLA-backed support',
                'Dedicated onboarding',
              ]}
            />

            <PricingCard
              category="ADD-ON SERVICE"
              title="UPLOAD MY DATA"
              price="$550"
              subtitle="INC GST • ONE-TIME FEE"
              buttonText="REQUEST MIGRATION"
              features={[
                'Professional data import',
                'Product catalogue import',
                'Opening stock migration',
                'Supplier migration',
                'Customer migration',
                'Review & verification',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-8 grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[4px] text-[#163B69]">
              WHY UNLIMITED USERS MATTERS
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-bold leading-tight text-[#444B55]">
              Your whole team.
              <br />
              One flat price. Always.
            </h2>

            <p className="mt-8 text-base sm:text-[18px] leading-relaxed sm:leading-9 text-[#7A7A7A]">
              Most POS systems charge per seat — meaning the more staff you
              have, the more you pay. JRpos is different. Every plan includes
              unlimited users at no extra cost.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#E6E6E6]">
            <div className="border-b sm:border-r p-6 sm:p-8">
              <h3 className="mb-3 font-bold text-[#444B55] text-sm sm:text-base">
                No surprise bills
              </h3>
              <p className="text-[#7A7A7A] text-xs sm:text-sm">
                Add as many staff as you need at no extra cost.
              </p>
            </div>

            <div className="border-b bg-[#F7F2EA] p-6 sm:p-8">
              <h3 className="mb-3 font-bold text-[#444B55] text-sm sm:text-base">
                Team-wide access
              </h3>
              <p className="text-[#7A7A7A] text-xs sm:text-sm">
                Every employee gets their own login.
              </p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r bg-[#F7F2EA] p-6 sm:p-8">
              <h3 className="mb-3 font-bold text-[#444B55] text-sm sm:text-base">Scale freely</h3>
              <p className="text-[#7A7A7A] text-xs sm:text-sm">
                Open new stores without extra software fees.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="mb-3 font-bold text-[#444B55] text-sm sm:text-base">Full control</h3>
              <p className="text-[#7A7A7A] text-xs sm:text-sm">
                Granular role permissions for every staff member.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#163B69] py-8">
        <div className="mx-auto flex flex-wrap justify-around gap-y-6 text-center text-white px-6 max-w-[1280px]">
          <div>
            <h3 className="text-2xl font-bold">
              5,000<span className="text-[#F4A300]">+</span>
            </h3>
            <p className="mt-1 text-[11px] text-gray-300">Active Stores</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              $2.1<span className="text-[#F4A300]">B</span>
            </h3>
            <p className="mt-1 text-[11px] text-gray-300">Processed Yearly</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              99.9<span className="text-[#F4A300]">%</span>
            </h3>
            <p className="mt-1 text-[11px] text-gray-300">Platform Uptime</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">∞</h3>
            <p className="mt-1 text-[11px] text-gray-300">
              Years in Every Plan
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
