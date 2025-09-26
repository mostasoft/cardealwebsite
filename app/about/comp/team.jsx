// components/TeamSection.tsx
const team = [
  { name: "John Carter", role: "CEO", img: "/team1.jpg" },
  { name: "Emily Smith", role: "Sales Manager", img: "/team2.jpg" },
  { name: "David Johnson", role: "Service Head", img: "/team3.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow p-6">
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-red-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
