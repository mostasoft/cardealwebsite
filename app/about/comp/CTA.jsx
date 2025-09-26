// components/AboutCTA.tsx
export default function AboutCTA() {
  return (
    <section className="py-20 bg-red-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Your Perfect Car?
        </h2>
        <p className="text-lg mb-8">
          Browse our inventory or book a test drive today. Our team is here to help you every step of the way.
        </p>
        <a
          href="/inventory"
          className="inline-block bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Explore Inventory
        </a>
      </div>
    </section>
  );
}
