import Button from '../components/ui/button';
import dashboard from '../assets/image/dashboard.jpeg';
import PricingCard from '../components/ui/pricingcard';
function Home() {
  return (
    <>
      <section className="bg-[#163B69]">
        <div className="mx-auto flex min-h-[720px] max-w-[1400px] items-center justify-between px-24">
          {/* Left Side */}
          <div className="max-w-[540px]">
            <div className="mb-8 inline-flex rounded-full border border-[#2C4E7A] px-6 py-3">
              <span className="text-[12px] font-semibold uppercase tracking-[3px] text-[#F4A300]">
                Built Different • Zero Success Tax
              </span>
            </div>

            <h1 className="mb-8 text-[64px] font-bold leading-[68px] text-white">
              Scale Ambition
              <br />
              with <span className="text-[#F4D6A6]">Unlimited Users.</span>
            </h1>

            <p className="mb-10 max-w-[500px] text-[22px] leading-[38px] text-[#A9B7CA]">
              The only enterprise cloud POS that includes unlimited users and
              all features on every plan. Optimized for multi-location retail
              and high-volume operations.
            </p>

            <div className="flex gap-5">
              <Button>View Price</Button>

              <Button variant="secondary">Get a Demo</Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src={dashboard}
              alt="POS Dashboard"
              className="  h-[520px] w-[650px] rounded-[28px]  border  border-white/10 object-cover
shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            />

            <div className="absolute right-[-45px] top-[105px] flex w-[320px] items-center gap-5 rounded-2xl border border-white/20 bg-[#D9E1EB]/85 px-6 py-5 backdrop-blur-[2px] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F4A300]">
                📈
              </div>

              <div>
                <p className="text-[14px] font-medium text-[#4F5D6D]">
                  Real-time GMV
                </p>

                <p className="text-[28px] font-bold leading-none text-[#163B69]">
                  $42,910
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orange Strip */}
        <div className="bg-[#F4A300]">
          <div className="mx-auto flex max-w-[1280px] justify-center gap-20 px-16 py-6 font-semibold text-[#163B69]">
            <span>✓ Unlimited Users</span>
            <span>✓ All Features Included</span>
            <span>✓ 47+ Languages</span>
            <span>✓ Multi-Currency</span>
            <span>✓ iOS, Android & Web</span>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8] py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            POWERFUL CAPABILITIES
          </p>

          <h2 className="mb-16 text-center text-[64px] font-bold leading-[70px] text-[#444B55]">
            Everything you need,
            <br />
            <span className="text-[#A7A9AE]">nothing you don't.</span>
          </h2>

          <div className="grid grid-cols-3 border border-gray-300">
            {/* Card 1 */}
            <div className="p-10">
              <span className="text-7xl font-bold text-gray-200">01</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                Sales & POS
              </h3>

              <p className="mt-6 text-lg leading-10 text-gray-500">
                Blazing fast checkout with native support for split payments,
                credit notes, and multi-currency transactions. Works 100%
                offline.
              </p>

              <ul className="mt-8 space-y-4 text-lg text-gray-500">
                <li>• Gift cards & store credit</li>
                <li>• Custom receipt designer</li>
                <li>• Smart discount engine</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4F0EA] p-10">
              <span className="text-7xl font-bold text-gray-200">02</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                Deep Inventory
              </h3>

              <p className="mt-6 text-lg leading-10 text-gray-500">
                Manage thousands of SKUs across multiple warehouses. Automated
                purchase orders and AI-driven stock forecasting.
              </p>

              <ul className="mt-8 space-y-4 text-lg text-gray-500">
                <li>• Batch & serial tracking</li>
                <li>• Multi-location transfers</li>
                <li>• Supplier management</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-10">
              <span className="text-7xl font-bold text-gray-200">03</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                AI & Automation
              </h3>

              <p className="mt-6 text-lg leading-10 text-gray-500">
                Transform raw data into growth strategies. AI-driven predictive
                analytics and automated marketing triggers.
              </p>

              <ul className="mt-8 space-y-4 text-lg text-gray-500">
                <li>• Predictive reorder AI</li>
                <li>• Automated Re-ordering</li>
                <li>• Customer segmentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Blue Strip */}
      <section className="bg-[#163B69] py-4">
        <div className="mx-auto flex max-w-[1280px] justify-around text-center text-white">
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

      {/* Pricing Section */}
      <section className="bg-[#F7F2EA] py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            TRANSPARENT PRICING
          </p>

          <h2 className="mt-4 text-center text-[56px] font-bold text-[#444B55]">
            One price for all features.
            <br />
            Upgrade as <span className="text-[#F4A300]">inventory grows.</span>
          </h2>

          <p className="mt-4 text-center text-gray-500">
            No hidden fees. No per-user charges. Ever.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-8">
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

          <div className="mt-8 grid grid-cols-3 gap-8">
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
    </>
  );
}

export default Home;
