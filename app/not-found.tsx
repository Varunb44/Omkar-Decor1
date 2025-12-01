import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-golden-500 hover:bg-golden-600 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}







