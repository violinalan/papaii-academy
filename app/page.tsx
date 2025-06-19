import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600 text-gray-900">
      <Navbar />

      <section className="px-4 py-12 max-w-4xl mx-auto flex flex-col items-center text-center">
        <Image
          src="/papaii_logo.png"
          alt="Papa ʻĪʻī Christian Academy Logo"
          width={180}
          height={180}
          className="mb-6 mx-auto"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Welcome to Papa ʻĪʻī Christian Academy</h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
          A Classical Christian Collaborative Education Program rooted in Scripture and the historic Christian faith.
        </p>
        <p className="text-base sm:text-lg mb-8 max-w-2xl">
          Classes held at Kahului Baptist Church on Tuesdays (Forms 1–4) and Thursdays (Form 4 only).
        </p>
        <p className="text-base sm:text-lg mb-8 max-w-2xl">
          Join us as we partner with families to cultivate wisdom, virtue, and a love for Christ.
        </p>
        <Link href="/about">
          <span className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg hover:bg-blue-800">Learn More</span>
        </Link>
      </section>
    </main>
  );
}
