import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600 text-gray-900 max-w-7xl">
      <Navbar />

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <Image
          src="/papaii_logo.png"
          alt="Papa ʻĪʻī Christian Academy Logo"
          width={180}
          height={180}
          className="mb-6 mx-auto"
        />
        <h1 className="text-4xl font-extrabold mb-6">Welcome to Papa ʻĪʻī Christian Academy</h1>
        <p className="text-xl mb-8">
          A Classical Christian Collaborative Education Program rooted in Scripture and the historic Christian faith.
        </p>
        <p className="text-lg mb-4">
          Classes held at Kahului Baptist Church on Tuesdays (Forms 1–4) and Thursdays (Form 4 only).
        </p>
        <p className="text-lg mb-8">
          Join us as we partner with families to cultivate wisdom, virtue, and a love for Christ.
        </p>
        <Link href="/about">
          <span className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800">Learn More</span>
        </Link>
      </section>
    </main>
  );
}
