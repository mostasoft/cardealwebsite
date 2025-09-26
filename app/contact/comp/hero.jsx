// components/ContactHero.tsx
export default function ContactHero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Have questions or need help finding your dream car?  
          Get in touch with us today.
        </p>
      </div>
    </section>
  );
}
