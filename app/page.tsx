import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-600 text-gray-900">
      
      <Navbar />

      <div className="w-full h-[70vh] bg-cover bg-center bg-[url(/west_maui_mountains2.jpg)]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center mt-10 mb-6 md:mt-20 lg:mt-30">
            Papa ʻĪʻī Christian Academy
          </h1>
          <h3 className="text-white text-lg md:text-2xl text-center">
            A ministry of Kahului Baptist Church for Homeschool Families
          </h3>
        </div>
      </div>
      <div className="bg-white p-5 flex items-center justify-center">
        <h1 className="text-2xl text-center">
          A Classical Christian Collaborative Education Program rooted in Scripture and the historic Christian faith.
        </h1>
      </div>
      {/* <div className="p-10 space-y-4 grid lg:grid-cols-3 lg:space-x-5">
        <img className="p-4" src="/papaii_farm.jpg" alt="Papa ʻĪʻī Christian Academy" />
        <img className="p-4" src="/papaii_farm.jpg" alt="Papa ʻĪʻī Christian Academy" />
        <img className="p-4" src="/papaii_farm.jpg" alt="Papa ʻĪʻī Christian Academy" />
      </div> */}
      <div className="p-5 grid lg:grid-cols-2 items-center">
        <img className="p-8" src="/papaii_farm.jpg" alt="Papa ʻĪʻī Christian Academy" />
        <p className="text-white text-2xl text-center">
          To cultivate wisdom, virtue, and a love for Christ through classical education in partnership with parents.
        </p>
      </div>
    </main>
  );
}
