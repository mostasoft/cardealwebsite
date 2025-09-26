// components/Testimonials.tsx
const testimonials = [
  { name: "Sarah L.", text: "MostaSoft Motors made buying my car stress-free. The staff was super helpful and friendly!" },
  { name: "Michael B.", text: "I love my new car! Affordable, reliable, and excellent customer service." },
  { name: "Anna K.", text: "Best dealership experience I’ve ever had. Highly recommended!" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4 italic">“{t.text}”</p>
              <h3 className="font-semibold text-red-500">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
