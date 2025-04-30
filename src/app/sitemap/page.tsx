"use client"

import Link from "next/link"
import { productCategories } from "@/lib/products"

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#0076b2] mb-8">Website Sitemap</h1>
      
      <div className="space-y-12">
        {/* Main Pages */}
        <section>
          <h2 className="text-2xl font-bold text-[#252525] mb-4">Main Pages</h2>
          <ul className="space-y-2 ml-4">
            <li>
              <Link href="/" className="text-[#29567A] hover:text-[#0076b2] hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="text-[#29567A] hover:text-[#0076b2] hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-[#29567A] hover:text-[#0076b2] hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/certificates" className="text-[#29567A] hover:text-[#0076b2] hover:underline">
                Certificates
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#29567A] hover:text-[#0076b2] hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
        
        {/* Products Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#252525] mb-4">Products</h2>
          
          <ul className="space-y-6 ml-4">
            {productCategories.map((company) => (
              <li key={company.name} className="space-y-2">
                <Link href={company.href} className="text-[#0076b2] font-semibold hover:underline">
                  {company.name}
                </Link>
                
                {company.categories && company.categories.length > 0 && (
                  <ul className="ml-6 space-y-4">
                    {company.categories.map((category) => (
                      <li key={category.name} className="space-y-1">
                        <Link href={category.href} className="text-[#29567A] font-medium hover:text-[#0076b2] hover:underline">
                          {category.name}
                        </Link>
                        
                        {category.items && category.items.length > 0 && (
                          <ul className="ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-[#4a4a4a] hover:text-[#0076b2] hover:underline">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
