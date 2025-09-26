// components/Partners.tsx
const brands = ["/brand1.png", "/brand2.png", "/brand3.png", "/brand4.png"];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {brands.map((b, i) => (
            <img key={i} src={b} alt="brand logo" className="h-12 md:h-16" />
          ))}
        </div>
      </div>
    </section>
  );
}
