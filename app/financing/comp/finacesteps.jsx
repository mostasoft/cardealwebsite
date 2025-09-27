// components/FinancingStepsPhoto.tsx
const steps = [
  {
    num: "1",
    title: "Apply Online",
    desc: "Fill out a quick and easy application form.",
    img: "/1 (2).jpg",
  },
  {
    num: "2",
    title: "Get Approved",
    desc: "We’ll review your application and confirm approval.",
    img: "/1 (3).jpg",
  },
  {
    num: "3",
    title: "Choose Your Car",
    desc: "Pick from our wide selection of vehicles.",
    img: "/1 (5).jpg",
  },
  {
    num: "4",
    title: "Drive Away",
    desc: "Enjoy your new car with a payment plan you can afford.",
    img: "/1 (6).jpg",
  },
];

export default function FinancingStepsPhoto() {
  return (
    <section className="relative py-24 bg-gray-50">
      {/* Background image */}
      <img
        src="/images/financing-bg.jpg"
        alt="Financing Background"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-white/10 to-white/50 -z-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900">
          How It Works
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 md:space-x-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center md:w-1/4 relative">
              {/* Step image */}
              <div className="w-40 h-40 mb-4 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step number circle */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold mb-4 shadow-lg">
                {step.num}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 text-center md:text-left">{step.desc}</p>

              {/* Horizontal connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-1/2 h-1 bg-gray-300 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile connector line */}
        <div className="md:hidden absolute top-48 left-10 right-10 h-1 bg-gray-300"></div>
      </div>
    </section>
  );
}
