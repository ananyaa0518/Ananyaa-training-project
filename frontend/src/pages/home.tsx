import Button from '../components/ui/button';
import dashboard from '../assets/image/dashboard.jpeg';
import PricingCard from '../components/ui/pricingcard';
import dashboard1 from '../assets/image/dashboard1.jpeg';
import dashboard2 from '../assets/image/dashboard2.jpeg';
import dashboard3 from '../assets/image/dashboard.jpeg';
import TestimonialCard from '../components/ui/testimonialcard';
import blog1 from '../assets/image/blog1.jpeg';
import blog2 from '../assets/image/blog2.jpeg';
import blog3 from '../assets/image/blog3.jpeg';
import BlogCard from '../components/ui/blogcard';

function Home() {
  return (
    <>
      <section className="bg-[#163B69]">
        <div className="mx-auto flex flex-col lg:flex-row min-h-[500px] lg:min-h-[720px] max-w-[1400px] items-center justify-between px-6 sm:px-12 md:px-12 xl:px-24 py-16 lg:py-0 gap-8 lg:gap-12 xl:gap-16 text-center lg:text-left">
          <div className="flex-1 max-w-[540px] flex flex-col items-center lg:items-start">
            <div className="mb-8 inline-flex rounded-full border border-[#2C4E7A] px-6 py-3">
              <span className="text-[10px] md:text-[12px] font-semibold uppercase tracking-[3px] text-[#F4A300]">
                Built Different • Zero Success Tax
              </span>
            </div>

            <h1 className="mb-8 text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[68px] text-white">
              Scale Ambition
              <br />
              with <span className="text-[#F4D6A6]">Unlimited Users.</span>
            </h1>

            <p className="mb-10 max-w-[500px] text-lg sm:text-[22px] leading-relaxed lg:leading-[38px] text-[#A9B7CA]">
              The only enterprise cloud POS that includes unlimited users and
              all features on every plan. Optimized for multi-location retail
              and high-volume operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <Button className="w-full sm:w-auto">View Price</Button>
              <Button variant="secondary" className="w-full sm:w-auto">Get a Demo</Button>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-[650px]">
            <img
              src={dashboard}
              alt="POS Dashboard"
              className="w-full h-auto aspect-[4/3] rounded-[28px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            />

            <div className="absolute right-2 md:-right-8 top-1/4 flex w-[200px] sm:w-[320px] items-center gap-3 sm:gap-5 rounded-2xl border border-white/20 bg-[#D9E1EB]/85 px-4 py-3 sm:px-6 sm:py-5 backdrop-blur-[2px] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
              <div className="flex h-10 w-10 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#F4A300] text-lg sm:text-2xl shrink-0">
                📈
              </div>

              <div>
                <p className="text-[12px] sm:text-[14px] font-medium text-[#4F5D6D]">
                  Real-time GMV
                </p>

                <p className="text-xl sm:text-[28px] font-bold leading-none text-[#163B69]">
                  $42,910
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F4A300]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-6 font-semibold text-[#163B69] text-sm md:text-base">
            <span>✓ Unlimited Users</span>
            <span>✓ All Features Included</span>
            <span>✓ 47+ Languages</span>
            <span>✓ Multi-Currency</span>
            <span>✓ iOS, Android & Web</span>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="mb-4 text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            POWERFUL CAPABILITIES
          </p>

          <h2 className="mb-16 text-center text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[70px] text-[#444B55]">
            Everything you need,
            <br />
            <span className="text-[#A7A9AE]">nothing you don't.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 border border-gray-300 divide-y lg:divide-y-0 lg:divide-x divide-gray-300">
            <div className="p-8 sm:p-10">
              <span className="text-7xl font-bold text-gray-200">01</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                Sales & POS
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-500">
                Blazing fast checkout with native support for split payments,
                credit notes, and multi-currency transactions. Works 100%
                offline.
              </p>

              <ul className="mt-8 space-y-4 text-base md:text-lg text-gray-500">
                <li>• Gift cards & store credit</li>
                <li>• Custom receipt designer</li>
                <li>• Smart discount engine</li>
              </ul>
            </div>

            <div className="bg-[#F4F0EA] p-8 sm:p-10">
              <span className="text-7xl font-bold text-gray-200">02</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                Deep Inventory
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-500">
                Manage thousands of SKUs across multiple warehouses. Automated
                purchase orders and AI-driven stock forecasting.
              </p>

              <ul className="mt-8 space-y-4 text-base md:text-lg text-gray-500">
                <li>• Batch & serial tracking</li>
                <li>• Multi-location transfers</li>
                <li>• Supplier management</li>
              </ul>
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-7xl font-bold text-gray-200">03</span>

              <h3 className="mt-6 text-3xl font-bold text-[#163B69]">
                AI & Automation
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-500">
                Transform raw data into growth strategies. AI-driven predictive
                analytics and automated marketing triggers.
              </p>

              <ul className="mt-8 space-y-4 text-base md:text-lg text-gray-500">
                <li>• Predictive reorder AI</li>
                <li>• Automated Re-ordering</li>
                <li>• Customer segmentation</li>
              </ul>
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

          <p className="mt-4 text-center text-gray-500 text-sm md:text-base">
            No hidden fees. No per-user charges. Ever.
          </p>

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
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <p className="text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            FLEXIBLE INTERFACES
          </p>

          <h2 className="mt-4 text-center text-3xl sm:text-[52px] font-bold leading-tight text-[#444B55]">
            The flexibility of both <span className="text-[#F4A300]">Web</span>
            <br />
            <span className="text-[#F4A300]">and Mobile</span> interfaces.
          </h2>

          <div className="mt-16 flex flex-col xl:flex-row justify-center gap-6 items-center">
            <img
              src={dashboard1}
              alt="Dashboard 1"
              className="w-full max-w-[390px] h-[300px] rounded-[24px] border-[8px] border-[#D2D8DE] object-cover shadow-sm"
            />

            <img
              src={dashboard2}
              alt="Dashboard 2"
              className="w-full max-w-[390px] h-[300px] rounded-[24px] border-[8px] border-[#D2D8DE] object-cover shadow-sm"
            />

            <img
              src={dashboard3}
              alt="Dashboard 3"
              className="w-full max-w-[390px] h-[300px] rounded-[24px] border-[8px] border-[#D2D8DE] object-cover shadow-sm"
            />
          </div>

          <div className="mt-10 flex justify-center gap-2">
            <div className="h-2 w-10 rounded-full bg-[#F4A300]"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <p className="text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            CLIENT VOICES
          </p>

          <h2 className="mt-4 text-center text-3xl sm:text-[56px] font-bold leading-tight text-[#444B55]">
            What our customers
            <br />
            <span className="text-[#F4A300]">are saying.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              initials="SJ"
              name="Sarah Jenkins"
              role="CEO, Stone Retail Group"
              review="JRPOS was the best decision for our 12-store chain. No more per-seat fees for onboarding new staff."
            />

            <TestimonialCard
              initials="SJ"
              name="Sarah Jenkins"
              role="CEO, Stone Retail Group"
              review="JRPOS was the best decision for our 12-store chain. No more per-seat fees for onboarding new staff."
            />

            <TestimonialCard
              initials="SJ"
              name="Sarah Jenkins"
              role="CEO, Stone Retail Group"
              review="JRPOS was the best decision for our 12-store chain. No more per-seat fees for onboarding new staff."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F8] py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <p className="text-center text-xs font-semibold tracking-[4px] text-[#163B69]">
            INSIGHTS & RESOURCES
          </p>

          <h2 className="mt-4 text-center text-3xl sm:text-[56px] font-bold leading-tight text-[#444B55]">
            Stay ahead of
            <br />
            <span className="text-[#F4A300]">commerce.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              image={blog1}
              category="Blog"
              title="How to Scale Your Retail Inventory Across 10+ Locations"
              description="Learn the proven frameworks used by leading retailers to manage stock levels without spreadsheets."
              author="Olivia Rhye"
              date="20 Jan 2022"
            />

            <BlogCard
              image={blog2}
              category="Product"
              title="Migrating to Linear 101"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking."
              author="Phoenix Baker"
              date="19 Jan 2022"
            />

            <BlogCard
              image={blog3}
              category="Software Engineering"
              title="Building your API Stack"
              description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
              author="Lana Steiner"
              date="18 Jan 2022"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
