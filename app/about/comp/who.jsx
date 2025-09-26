// components/OurStory.tsx
export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At <span className="font-semibold text-red-500">MostaSoft Motors</span>, 
            we started with a simple mission: to make car buying easy, transparent, and 
            enjoyable for everyone. Over the years, we’ve built a trusted reputation 
            by delivering high-quality vehicles and exceptional customer service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re searching for your first car, upgrading to something new, 
            or adding to your collection, we’re here to help you every step of the way.
          </p>
        </div>
        <div>
          <img
            src="/about-story.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
