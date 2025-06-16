export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <h1 className="text-5xl font-bold mb-4">Papa ʻĪʻī Christian Academy</h1>
        <p className="text-xl max-w-2xl mb-6">
          A Classical Christian Homeschool Co-op Serving Maui Families
        </p>
        <a
          href="/about"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Learn More
        </a>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Christ-Centered. Parent-Directed. Church-Partnered.</h2>
        <p className="text-lg">
          Hosted at Kahului Baptist Church, Papa ʻĪʻī Christian Academy offers a classical Christian education one day per week (two for older students), partnering with parents to cultivate wisdom, virtue, and love for Christ.
        </p>
      </section>

      {/* Key Info */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <div><strong>📍 Location:</strong> Kahului Baptist Church, 309 Puunene Ave</div>
          <div><strong>🗓️ Days/Times:</strong> Tuesdays (All Forms), Thursdays (Form 4 Only)</div>
          <div><strong>🎓 Forms:</strong> Form 1 (K–2) through Form 4 (9th–10th)</div>
          <div><strong>📞 Contact:</strong> Melissa Haynes – mshaynes626@gmail.com / 808-283-8778</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
        <p className="mb-6">Apply or reach out to us today to explore joining the Papa ʻĪʻī ʻohana.</p>
        <a
          href="/apply"
          className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Scripture or Quote */}
      <section className="bg-blue-50 py-12 px-6 text-center text-xl italic">
        “The fear of the Lord is the beginning of wisdom.” — Proverbs 9:10
      </section>
    </main>
  );
}
