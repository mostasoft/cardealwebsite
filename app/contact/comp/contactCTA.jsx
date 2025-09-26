// components/ContactCTA.tsx
export default function ContactCTA() {
  return (
    <section className="py-20 bg-red-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Get You Behind the Wheel!
        </h2>
        <p className="text-lg mb-8">
          Book a test drive today or explore our latest inventory online.
        </p>
        <a
          href="/inventory"
          className="inline-block bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Browse Inventory
        </a>
      </div>
    </section>
  );
}
