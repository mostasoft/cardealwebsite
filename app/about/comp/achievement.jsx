// components/Achievements.tsx
const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "5,000+", label: "Cars Sold" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "20+", label: "Awards & Recognitions" },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-red-500 mb-2">{s.value}</h3>
            <p className="text-gray-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
