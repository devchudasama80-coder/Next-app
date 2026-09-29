import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Home</h1>

      <div className="flex flex-col gap-2 w-56">
        <Link
          href="/about"
          className="px-4 py-2 border border-gray-300 rounded text-center text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 border border-gray-300 rounded text-center text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Contact
        </Link>
        <Link
          href="/users"
          className="px-4 py-2 bg-gray-800 text-white rounded text-center text-sm hover:bg-black transition"
        >
          Manage Users
        </Link>
      </div>
    </div>
  );
}