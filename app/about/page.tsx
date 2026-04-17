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

        {/* <section className="mb-12">
          <h2 className="text-3xl mb-2">Statement of Faith</h2>
          <p className="text-xl">
            Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here. Statement of faith goes here.
          </p>
        </section> */}

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Educational Philosophy</h2>
          <p className="text-xl mb-4">
            We follow the Classical Christian Education model, guided by the historic Trivium and rooted in a Christ-centered worldview. Our approach is:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xl">
            <li>Christ-centered</li>
            <li>Parent-directed</li>
            <li>Church-partnered</li>
            <li>Academically rigorous</li>
            <li>Spiritually formative</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl mb-2">Subjects and Forms</h2>
          <p className="text-xl mb-4">
          Art, Music, History, Science, Writing, Grammar, Literature are some of the core subjects that we seek to partner with the parents
          in fulfilling.  We pick curriculum (Memoria Press, Fix It Grammar, IEW, Omnibus, Lost Tools in Writing, Noeo, Apologia, etc)
          that is to be used on school days and tutors communicate weekly with students and parents on what is to be done on the home-school
          days with that curriculum.  We do not teach math or reading - it is assumed that those will be taught and developed at home.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xl">
            <li>Form 1 (K - Children that turn 5 by August 15th)</li>
            <li>Form 2 (1st-2nd)</li>
            <li>Form 3 (3rd-4th)</li>
            <li>Form 4 (5th-6th)</li>
            <li>Form 5 (7th-8th)</li>
            <li>Form 6 (9th-10th)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl mb-2">Campus Info</h2>
          <p className="mb-6 text-xl">
          Papa ‘Ī‘ī Christian Academy is a ministry of Kahului Baptist Church, created especially to support families from partner
          churches on Maui. We are grateful to welcome other Christian families as space allows, while prioritizing service to those
          within our church network.
          </p>
          <p className="text-xl">
            Classes are held at Kahului Baptist Church, 309 Puunene Ave.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Tuesdays:</strong> 8:00 AM – 2:00 PM (Forms 1–4)</li>
            <li><strong>Thursdays:</strong> 8:00 AM – 1:00 PM (Form 4+ only)</li>
          </ul>
        </section>
      </section>
      <div>
        <img className="pb-4 lg:pb-8" src="/art_class2.jpeg" alt="Papa ʻĪʻī Christian Academy" />
      </div>
    </main>
  );
}
