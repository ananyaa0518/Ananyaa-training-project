const blogs = [
  {
    _id: "1",
    title: "How to Scale Your Retail Inventory Across 10+ Locations",
    content: "There’s a moment every multi-location retailer knows well. You’re standing in Store 3, a customer has just asked for a product you know you have — you just don’t know where. It’s either at the warehouse, at Store 1, or somewhere in transit between Store 2 and Store 4. You apologize, take their number, and promise to call back.\n\nThat moment is a symptom of a larger problem: inventory visibility doesn’t scale naturally. What works for one store — even a well-run, tightly managed one — breaks down the moment you add a second location. And it gets exponentially harder with each one you add.\n\nThis isn’t a failure of effort or management. It’s a systems problem. And like all systems problems, it has a systems solution.\n\nWhy Inventory Gets Harder at Scale\n\nSingle-store inventory is fundamentally a counting problem. You have items, you sell items, you reorder items. The math is simple. The challenge is consistency and discipline — making sure every sale, every receipt, every write-off is recorded accurately and immediately.\n\nMulti-location inventory adds two new dimensions: movement and ownership. Stock doesn’t just sit in one place — it moves between locations, and at any given moment, it might not be clear which location “owns” a particular item.\n\n“The retailers who scale successfully don’t have better staff or better products. They have better systems — and they implement those systems before they need them, not after the chaos begins.”\n\nThe 5-Layer Framework\n\nBased on working with thousands of multi-location retailers, we’ve identified five layers of inventory management that need to be in place before you open your second (or fifth, or fifteenth) location.\n\nLayer 1 — Centralised Product Master\n\nEvery location needs to operate from the same product database. This means a single SKU list, a single set of product names, and a single barcode directory.\n\nWhen Store 1 and Store 2 have different names for the same product, or when the warehouse uses a different SKU format, data integrity collapses within weeks.\n\nLayer 2 — Real-Time Stock Levels Per Location\n\nYou need to know, at any moment, exactly how many units of each product are at each location. Not “as of this morning’s report.” Not “approximately, based on yesterday’s sales.”\n\nThis requires a POS system that updates stock levels on every transaction — sales, returns, transfers, write-offs, and receipts — in real time.\n\nThe Transfer Problem (And How to Solve It)\n\nOf all the challenges in multi-location inventory, stock transfers cause the most ongoing grief. The root cause is almost always the same: transfers are treated as informal, and the paperwork doesn’t keep pace with the physical movement of goods.\n\nThe fix is to treat every transfer like a purchase order. It needs a creation date, an origin location, a destination location, a confirmed item list, and a completion step at the receiving end.\n\nCreate a transfer request from the sending location.\nThe system removes stock and places it “in transit”.\nThe receiving location confirms receipt.\nStock is added to the receiver’s count.\nBoth locations can see the full audit trail.",
    image: "dashboard.jpeg",
    author: "Olivia Rhye",
    createdAt: "2022-01-20T10:00:00.000Z",
    updatedAt: "2022-01-20T10:00:00.000Z"
  },
  {
    _id: "2",
    title: "Migrating to Linear 101",
    content: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Project management doesn't have to be a chore. With its keyboard-first design, speed, and clean interface, migrating to Linear is one of the best decisions a product team can make. In this guide, we will look at importing your data, organizing sprints, and tracking bugs.",
    image: "dashboard1.jpeg",
    author: "Phoenix Baker",
    createdAt: "2022-01-19T10:00:00.000Z",
    updatedAt: "2022-01-19T10:00:00.000Z"
  },
  {
    _id: "3",
    title: "Building your API Stack",
    content: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them. Creating a modern API stack requires a solid understanding of protocols, serialization, caching, and gateway routing. We'll go through the best practices for setting up gateways and authorization servers.",
    image: "dashboard2.jpeg",
    author: "Lana Steiner",
    createdAt: "2022-01-18T10:00:00.000Z",
    updatedAt: "2022-01-18T10:00:00.000Z"
  }
];

module.exports = blogs;
