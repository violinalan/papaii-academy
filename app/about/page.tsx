import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-100 py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="text-xl font-bold text-blue-700">Papa ʻĪʻī Academy</div>
        <div className="space-x-4">
          <Link href="/">
            <span className="text-gray-700 hover:text-blue-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-gray-700 hover:text-blue-700">About</span>
          </Link>
        </div>
      </nav>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Papa ʻĪʻī Christian Academy</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Vision</h2>
          <p>
            To cultivate wisdom, virtue, and a love for Christ through classical education in partnership with parents.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Mission</h2>
          <p>
            Papa ʻĪʻī Christian Academy exists to assist Christian families in the godly education of their children, offering a structured, classical learning environment one (or two) day(s) a week rooted in Scripture and the historic Christian faith.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Statement of Faith</h2>
          <p>
            Papa ʻĪʻī Christian Academy is hosted by Kahului Baptist Church, which affirms the Abstract of Principles as a faithful summary of biblical doctrine. All board members affirm this confession. While tutors and families are not required to agree with every point, they must not hold open dissent from the broader evangelical framework it represents.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Educational Philosophy</h2>
          <p className="mb-4">
            We follow the Classical Christian Education model, guided by the historic Trivium and rooted in a Christ-centered worldview. Our approach is:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Christ-centered</li>
            <li>Parent-directed</li>
            <li>Church-partnered</li>
            <li>Academically rigorous</li>
            <li>Spiritually formative</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Location & Schedule</h2>
          <p>
            Classes are held at Kahului Baptist Church, 309 Puunene Ave.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Tuesdays:</strong> 8:00 AM – 2:00 PM (Forms 1–4)</li>
            <li><strong>Thursdays:</strong> 8:00 AM – 1:00 PM (Form 4 only)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            Melissa Haynes<br />
            <a href="mailto:mshaynes626@gmail.com" className="text-blue-600 underline">mshaynes626@gmail.com</a><br />
            808-283-8778
          </p>
        </section>
      </section>
    </main>
  );
}
