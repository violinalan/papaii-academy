import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600 text-gray-900">
      <Navbar />

      <div className="w-full h-[80vh] bg-cover bg-center bg-[url(/west_maui_mountains.jpeg)]">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Papa ʻĪʻī Christian Academy
          </h1>
        </div>
      </div>
      <div className="bg-white p-3 flex items-center justify-center">
        <h1 className="text-2xl text-center">
          A Classical Christian Collaborative Education Program rooted in Scripture and the historic Christian faith.
        </h1>
      </div>
    </main>
  );
}
