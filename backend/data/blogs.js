const blogs = [
  {
    _id: "1",
    title: "Getting Started with React and TypeScript",
    content: "React and TypeScript are a powerful combination for building type-safe, scalable web applications. TypeScript helps catch errors early during development, provides autocomplete support, and makes code self-documenting. In this blog post, we will explore how to setup a new project, write typed components, and manage states effectively.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    author: "Jane Doe",
    createdAt: new Date("2026-06-25T10:00:00Z").toISOString(),
    updatedAt: new Date("2026-06-25T10:00:00Z").toISOString()
  },
  {
    _id: "2",
    title: "Understanding Node.js Event Loop",
    content: "Node.js runs single-threaded, non-blocking asynchronous execution, which is powered by the Event Loop. Understanding how the Event Loop works (phases like timers, pending callbacks, poll, check, and close callbacks) is essential for writing high-performance Node.js applications and avoiding common pitfalls like blocking the main thread.",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=800&q=80",
    author: "John Smith",
    createdAt: new Date("2026-06-28T14:30:00Z").toISOString(),
    updatedAt: new Date("2026-06-28T14:30:00Z").toISOString()
  },
  {
    _id: "3",
    title: "A Beginner's Guide to Express.js",
    content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies route handling, middleware configuration, and integration with templates or APIs. We'll walk through setting up routes and controllers in this guide.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    author: "Alice Johnson",
    createdAt: new Date("2026-06-29T09:15:00Z").toISOString(),
    updatedAt: new Date("2026-06-29T09:15:00Z").toISOString()
  }
];

module.exports = blogs;
