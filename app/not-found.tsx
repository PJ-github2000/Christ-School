import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/school/logoShort.png"
            alt="404 Illustration"
            fill
            className="object-contain rounded-lg"
          />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-[#154265] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#154265] text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Go Back Home
          </Link>
          <Link
            href="/contact"
            className="bg-white text-[#154265] px-6 py-3 rounded-lg font-semibold border-2 border-[#154265] hover:bg-gray-50 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-[#154265] hover:underline">
              About Us
            </Link>
            <Link href="/events" className="text-[#154265] hover:underline">
              Events
            </Link>
            <Link href="/facilities" className="text-[#154265] hover:underline">
              Facilities
            </Link>
            <Link href="/contact" className="text-[#154265] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 