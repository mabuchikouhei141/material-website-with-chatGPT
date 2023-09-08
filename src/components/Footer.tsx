import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Your Company Name</h3>

        <div className="flex justify-center space-x-4 mb-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact</a>
        </div>

        <p className="mt-4 text-sm">
            &copy; {(new Date()).getFullYear()} Your Company Name. All rights reserved.
        </p>
    </div>
</footer>

    </>
  )
}

export default Footer