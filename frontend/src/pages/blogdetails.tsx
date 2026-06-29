import officeImage from '../assets/image/blog2.jpeg';

function BlogDetails() {
  return (
    <main className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-[1280px] px-8 py-12">
        <h1 className="max-w-[1000px] text-[52px] font-bold leading-tight text-[#2F3540]">
          How to Scale Your Retail Inventory Across 10+ Locations Without Losing
          Control
        </h1>

        <img
          src={officeImage}
          alt="Office"
          className="mt-10 w-full rounded-lg"
        />

        <div className="mt-8 flex flex-wrap items-center gap-8 text-sm text-gray-500">
          <span>Lana Steiner</span>
          <span>12 August 2026</span>
          <span>10 Minutes Read</span>
        </div>

        <div className="mt-12 space-y-8 text-[16px] leading-8 text-gray-600">
          <p>
            There’s a moment every multi-location retailer knows well. You’re
            standing in Store 3, a customer has just asked for a product you
            know you have — you just don’t know where. It’s either at the
            warehouse, at Store 1, or somewhere in transit between Store 2 and
            Store 4. You apologize, take their number, and promise to call back.
          </p>

          <p>
            That moment is a symptom of a larger problem: inventory visibility
            doesn’t scale naturally. What works for one store — even a well-run,
            tightly managed one — breaks down the moment you add a second
            location. And it gets exponentially harder with each one you add.
          </p>

          <p>
            This isn’t a failure of effort or management. It’s a systems
            problem. And like all systems problems, it has a systems solution.
          </p>

          <h2 className="pt-4 text-[36px] font-bold text-[#2F3540]">
            Why Inventory Gets Harder at Scale
          </h2>

          <p>
            Single-store inventory is fundamentally a counting problem. You have
            items, you sell items, you reorder items. The math is simple. The
            challenge is consistency and discipline — making sure every sale,
            every receipt, every write-off is recorded accurately and
            immediately.
          </p>

          <p>
            Multi-location inventory adds two new dimensions: movement and
            ownership. Stock doesn’t just sit in one place — it moves between
            locations, and at any given moment, it might not be clear which
            location “owns” a particular item.
          </p>

          <div className="rounded-lg border-l-4 border-[#F4A300] bg-[#FFF8EC] p-6 italic text-[#2F3540]">
            “The retailers who scale successfully don’t have better staff or
            better products. They have better systems — and they implement those
            systems before they need them, not after the chaos begins.”
          </div>

          <h2 className="pt-4 text-[36px] font-bold text-[#2F3540]">
            The 5-Layer Framework
          </h2>

          <p>
            Based on working with thousands of multi-location retailers, we’ve
            identified five layers of inventory management that need to be in
            place before you open your second (or fifth, or fifteenth) location.
          </p>

          <h3 className="text-[26px] font-semibold text-[#2F3540]">
            Layer 1 — Centralised Product Master
          </h3>

          <p>
            Every location needs to operate from the same product database. This
            means a single SKU list, a single set of product names, and a single
            barcode directory.
          </p>

          <p>
            When Store 1 and Store 2 have different names for the same product,
            or when the warehouse uses a different SKU format, data integrity
            collapses within weeks.
          </p>

          <h3 className="text-[26px] font-semibold text-[#2F3540]">
            Layer 2 — Real-Time Stock Levels Per Location
          </h3>

          <p>
            You need to know, at any moment, exactly how many units of each
            product are at each location. Not “as of this morning’s report.” Not
            “approximately, based on yesterday’s sales.”
          </p>

          <p>
            This requires a POS system that updates stock levels on every
            transaction — sales, returns, transfers, write-offs, and receipts —
            in real time.
          </p>

          <h2 className="pt-4 text-[36px] font-bold text-[#2F3540]">
            The Transfer Problem (And How to Solve It)
          </h2>

          <p>
            Of all the challenges in multi-location inventory, stock transfers
            cause the most ongoing grief. The root cause is almost always the
            same: transfers are treated as informal, and the paperwork doesn’t
            keep pace with the physical movement of goods.
          </p>

          <p>
            The fix is to treat every transfer like a purchase order. It needs a
            creation date, an origin location, a destination location, a
            confirmed item list, and a completion step at the receiving end.
          </p>

          <ul className="list-disc space-y-3 pl-6">
            <li>Create a transfer request from the sending location.</li>
            <li>The system removes stock and places it “in transit”.</li>
            <li>The receiving location confirms receipt.</li>
            <li>Stock is added to the receiver’s count.</li>
            <li>Both locations can see the full audit trail.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
