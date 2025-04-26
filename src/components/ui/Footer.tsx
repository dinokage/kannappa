import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#ECDFCF] text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Let's Connect Section */}
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="text-xl font-medium">Let&apos;s Connect</h3>
            <p className="text-sm leading-relaxed">
              An exclusive One-Stop Facility for guaranteed energy efficient solutions related to Air Compressors,
              Pumps, Valves,Drive Engineering & Material handling.
            </p>

            <div className="mt-6">
              <h4 className="uppercase text-sm font-medium mb-2">FOLLOW US</h4>
              <div className="inline-flex border border-white/30">
                <Link href="#" className="p-2 border-r border-white/30">
                  <svg className="w-5 h-5 text-[#1d9bf0] fill-current" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
                <Link href="#" className="p-2 border-r border-white/30">
                  <svg className="w-5 h-5 text-[#1877f2] fill-current" viewBox="0 0 24 24">
                    <path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2z" />
                  </svg>
                </Link>
                <Link href="#" className="p-2">
                  <svg className="w-5 h-5 text-[#0076b2] fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Get the Latest Information Section */}
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="text-xl font-medium">Get the Latest Information</h3>
            <div className="flex rounded-full overflow-hidden">
              <input type="email" placeholder="Email Address" className="px-4 py-2 bg-white text-[#606060] w-full" />
              <button className="bg-[#29567a] border border-white rounded-full p-2 -ml-8">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
              <Link href="#" className="hover:underline">
                Products
              </Link>
              <Link href="#" className="hover:underline">
                Services
              </Link>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Form Section */}
       
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-xs text-center pt-4">
          <div className="flex justify-center space-x-1 flex-wrap">
            <span>•</span>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <span>-</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>-</span>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <span className="ml-2">powered by catchway</span>
            <Link href="https://eshani.com" className="text-[#00aeef] hover:underline">
              eshani.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

