// components/WhyChooseUs.tsx
const features = [
  { title: "Trusted Service", desc: "Decades of experience with thousands of satisfied customers." },
  { title: "Affordable Pricing", desc: "Transparent pricing with no hidden fees." },
  { title: "Quality Vehicles", desc: "Every car is inspected and certified before reaching you." },
  { title: "After-Sales Support", desc: "We’re here for you even after you drive off the lot." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-red-500 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
