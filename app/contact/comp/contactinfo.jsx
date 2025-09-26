// components/ContactInfo.tsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: <MapPin className="w-6 h-6 text-red-500" />, title: "Address", text: "123 Main Street, Dhaka, Bangladesh" },
  { icon: <Phone className="w-6 h-6 text-red-500" />, title: "Phone", text: "+880 1234 567 890" },
  { icon: <Mail className="w-6 h-6 text-red-500" />, title: "Email", text: "support@mostasoft.com" },
  { icon: <Clock className="w-6 h-6 text-red-500" />, title: "Working Hours", text: "Sat - Thu: 9:00 AM - 7:00 PM" },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {info.map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
