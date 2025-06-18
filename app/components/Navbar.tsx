import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold text-blue-700">Papa ʻĪʻī Academy</div>
      <div className="space-x-4">
        <Link href="/">
          <span className="text-gray-700 hover:text-blue-700">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-gray-700 hover:text-blue-700">About</span>
        </Link>
        <Link href="/apply">
          <span className="text-gray-700 hover:text-blue-700">Apply</span>
        </Link>
      </div>
    </nav>
  );
}