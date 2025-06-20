import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-600 text-white">
      <Navbar />

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-5xl mb-8 text-center">About Papa ʻĪʻī Christian Academy</h1>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Vision</h2>
          <p className="text-xl">
            To cultivate wisdom, virtue, and a love for Christ through classical education in partnership with parents.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Mission</h2>
          <p className="text-xl">
            Papa ʻĪʻī Christian Academy exists to assist Christian families in the godly education of their children, offering a structured, classical learning environment one (or two) day(s) a week rooted in Scripture and the historic Christian faith.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Statement of Faith</h2>
          <p className="text-xl">
            Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Educational Philosophy</h2>
          <p className="text-xl mb-4">
            We follow the Classical Christian Education model, guided by the historic Trivium and rooted in a Christ-centered worldview. Our approach is:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-xl">Christ-centered</li>
            <li className="text-xl">Parent-directed</li>
            <li className="text-xl">Church-partnered</li>
            <li className="text-xl">Academically rigorous</li>
            <li className="text-xl">Spiritually formative</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Location & Schedule</h2>
          <p className="text-xl">
            Classes are held at Kahului Baptist Church, 309 Puunene Ave.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Tuesdays:</strong> 8:00 AM – 2:00 PM (Forms 1–4)</li>
            <li><strong>Thursdays:</strong> 8:00 AM – 1:00 PM (Form 4 only)</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
