// components/AboutHero.tsx

export default function AboutHero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-red-500">MostaSoft Motors</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          We’re more than just a car dealership — we’re a team dedicated to helping 
          you find the right vehicle, with trust, quality, and unmatched customer service.
        </p>
        <a
          href="/inventory"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Explore Inventory
        </a>
      </div>
    </section>
  );
}
