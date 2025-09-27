// components/FinancingForm.tsx
"use client";

import { useState } from "react";

export default function FinancingForm() {
  const [form, setForm] = useState({ name: "", email: "", income: "", car: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide success after 3s
    setForm({ name: "", email: "", income: "", car: "" });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Apply for Financing</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-6 relative"
        >
          {/* Success Message */}
          {submitted && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
              Application Submitted!
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "income", label: "Monthly Income ($)", type: "number" },
              { name: "car", label: "Car Interested In", type: "text" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-red-500 peer-focus:text-sm transition-all">
                  {field.label}
                </label>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
