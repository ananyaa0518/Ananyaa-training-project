import design from '../assets/image/design.jpeg';
import FeatureCategorySidebar from '../components/ui/FeatureCategorySidebar';
import FeatureSection from '../components/ui/FeatureSection';

function Feature() {
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
          <h1 className="mx-auto max-w-[700px] text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight text-white">
            Every Tool Your Business
            <span className="text-[#FFDDB8]"> Needs.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-base sm:text-[18px] leading-relaxed sm:leading-8 text-[#B8C6D9]">
            Unlike other POS systems that lock features behind higher tiers,
            every JRpos feature is included in every plan — from the free trial
            to Enterprise. The only difference between plans is the size of your
            product catalogue
          </p>
        </div>
      </section>

      <div className="mx-auto flex flex-col lg:flex-row max-w-[1280px] gap-12 lg:gap-20 px-6 sm:px-8 py-16 md:py-24">
        <FeatureCategorySidebar
          categories={[
            'Point of Sale',
            'Inventory',
            'Purchase Orders',
            'Reporting',
            'Customers & Loyalty',
            'Multi Platform',
            'AI & Automation',
          ]}
        />

        <div className="flex-1">
          <FeatureSection
            number="01"
            tag="AT THE COUNTER"
            title="Point of Sale &"
            highlight="Sales Processing"
            description="A POS that's fast enough for your busiest day."
            features={[
              {
                title: 'Touch-optimised POS screen',
                description: 'Works on touch, tablet and desktop',
              },
              {
                title: 'Product search',
                description: 'Find products instantly',
              },
              {
                title: 'Multiple payment methods',
                description: 'Cash, card and digital wallets',
              },
              {
                title: 'WhatsApp receipts',
                description: 'No printer required',
              },
              {
                title: 'Offline mode',
                description: 'Continue processing sales',
              },
              {
                title: 'Customer-linked sales',
                description: 'Attach sales to customer profiles',
              },
              {
                title: 'PIN approval',
                description: 'Approval workflows',
              },
              {
                title: 'Barcode scanning',
                description: 'Fast and accurate',
              },
            ]}
          />
          <FeatureSection
            number="02"
            tag="KNOW WHAT YOU HAVE"
            title="Inventory &"
            highlight="Stock"
            description="Real-time inventory that actually stays accurate."
            features={[
              {
                title: 'Real-time stock level tracking',
                description: 'Updates with every sale and purchase',
              },
              {
                title: 'Multi-location stock management',
                description: 'Track inventory across stores',
              },
              {
                title: 'Stock transfers between locations',
                description: 'Move stock with a full audit trail',
              },
              {
                title: 'Product location mapping',
                description: 'Assign shelf or aisle locations',
              },
              {
                title: 'Low stock alerts',
                description: 'Get notified before stock runs out',
              },
              {
                title: 'Bulk product import',
                description: 'Upload products via spreadsheet',
              },
              {
                title: 'Product variants',
                description: 'Manage sizes, colours and attributes',
              },
              {
                title: 'Inventory valuation reports',
                description: 'Know the value of your stock',
              },
              {
                title: 'Stock adjustment tools',
                description: 'Write-off damaged or lost stock',
              },
              {
                title: 'Supplier management',
                description: 'Link suppliers to products',
              },
            ]}
          />
          <FeatureSection
            number="03"
            tag="STOCK REPLENISHMENT"
            title="Purchase Orders &"
            highlight="Suppliers"
            description="Create purchase orders, send them to suppliers and receive stock directly into inventory."
            features={[
              {
                title: 'Create and manage purchase orders',
                description: 'Full PO workflow in one place',
              },
              {
                title: 'Supplier directory',
                description: 'Store supplier contacts and terms',
              },
              {
                title: 'Receive stock against orders',
                description: 'Inventory updates automatically',
              },
              {
                title: 'Partial deliveries',
                description: 'Receive stock in multiple shipments',
              },
              {
                title: 'Purchase history by supplier',
                description: 'Track all supplier orders',
              },
              {
                title: 'Cost price tracking',
                description: 'Compare purchase costs over time',
              },
              {
                title: 'Outstanding order tracking',
                description: 'Monitor pending deliveries',
              },
              {
                title: 'Purchase order notes',
                description: 'Add comments and instructions',
              },
            ]}
          />
          <FeatureSection
            number="04"
            tag="REPORTING"
            title="Reporting &"
            highlight="Financial Tracking"
            description="Get the insights you need to make smarter business decisions."
            features={[
              {
                title: 'Profit and loss reports',
                description: 'Daily, weekly, monthly or custom periods',
              },
              {
                title: 'Sales reports',
                description: 'By product, category or team member',
              },
              {
                title: 'Inventory valuation reports',
                description: 'Total stock value at cost and retail',
              },
              {
                title: 'Tax reports',
                description: 'GST, VAT and tax summaries',
              },
              {
                title: 'Expense tracking',
                description: 'Track business expenses',
              },
              {
                title: 'Non-POS income tracking',
                description: 'Record external income sources',
              },
              {
                title: 'Customer due list',
                description: 'Outstanding balances at a glance',
              },
              {
                title: 'End-of-day reconciliation',
                description: 'Close registers accurately',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Feature;
