"use client"

import type React from "react"

import { ChevronDown, Search, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { productCategories as productData } from "@/lib/products"


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState<string | null>(null)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<{company: string, category: string} | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Reset all nested menus when closing the main menu
    if (mobileMenuOpen) {
      setMobileProductsOpen(false)
      setMobileCompanyOpen(null)
      setMobileCategoryOpen(null)
    }
  }

  return (
    <div className="mx-auto container rounded-b-lg sticky top-0 z-20 bg-gradient-to-l from-[#60A7C1] to-[#FFF9E3] py-3 px-4 md:px-6 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 overflow-hidden rounded-md">
              <Image
                src="/logo.png"
                alt="Eshani Logo"
                width={150}
                height={150}
              />
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className="text-[#252525] font-bold text-base uppercase border-b-2 ">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
              <DropdownMenu>
                  <DropdownMenuTrigger className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all focus:outline-none">
                    Products{" "}
                    <ChevronDown className="inline-block ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {productData.map((company) =>
                      company.categories && company.categories.length > 0 ? (
                        <DropdownMenuSub key={company.name}>
                          <DropdownMenuSubTrigger className="w-full">
                            {company.name}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="w-56">
                            {company.categories.map((category) =>
                              category.items &&
                              category.items.length > 0 ? (
                                <DropdownMenuSub key={category.name}>
                                  <DropdownMenuSubTrigger className="w-full">
                                    {category.name}
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuSubContent className="w-56 overflow-y-scroll max-h-96">
                                    {category.items.map((item) => (
                                     <DropdownMenuItem key={item.name}>
                                     <Link href={item.href} className="w-full">
                                       {item.name}
                                     </Link>
                                   </DropdownMenuItem>
                                    ))}
                                  </DropdownMenuSubContent>
                                </DropdownMenuSub>
                              ) : (
                                <DropdownMenuItem key={category.name}>
                                  <Link href={category.href} className="w-full">
                                    {category.name}
                                  </Link>
                                </DropdownMenuItem>
                              )
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      ) : (
                        <DropdownMenuItem key={company.name}>
                          <Link href={company.href} className="w-full">
                            {company.name}
                          </Link>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#252525] font-bold text-base uppercase hover:border-b-2 hover:border-[#252525] transition-all"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full bg-[#29567a] py-2 pl-4 pr-10 text-[#ffffff] placeholder-[#ffffff]/80 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ffffff]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        <button 
          className="block lg:hidden" 
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="text-[#252525] h-6 w-6" />
          ) : (
            <Menu className="text-[#252525] h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile search - shown only on mobile */}
      <div className="mt-3 block md:hidden">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#29567a] py-2 pl-4 pr-10 text-[#ffffff] placeholder-[#ffffff]/80 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ffffff]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/25" 
            aria-hidden="true"
            onClick={toggleMobileMenu}
          />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="relative h-10 overflow-hidden rounded-md">
                <Image
                  src="/logo.png"
                  alt="Eshani Logo"
                  width={120}
                  height={120}
                />
              </div>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-[#252525]"
                onClick={toggleMobileMenu}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Mobile Navigation */}
            <div className="mt-2 flow-root">
              <div className="-my-1">
                <div className="py-2">
                  <Link
                    href="/"
                    className="block py-2 text-[#252525] font-bold text-base uppercase"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                </div>
                <div className="py-2">
                  <Link
                    href="/aboutus"
                    className="block py-2 text-[#252525] font-bold text-base uppercase"
                    onClick={toggleMobileMenu}
                  >
                    About Us
                  </Link>
                </div>
                
                {/* Mobile Products Menu */}
                <div className="py-2">
                  <button
                    className="flex items-center justify-between w-full py-2 text-[#252525] font-bold text-base uppercase"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* First Level: Companies */}
                  {mobileProductsOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {productData.map((company) => (
                        <div key={company.name}>
                          {company.categories && company.categories.length > 0 ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full py-2 text-[#252525] font-semibold text-sm"
                                onClick={() => 
                                  setMobileCompanyOpen(
                                    mobileCompanyOpen === company.name ? null : company.name
                                  )
                                }
                              >
                                {company.name}
                                <ChevronDown 
                                  className={`h-4 w-4 transition-transform ${
                                    mobileCompanyOpen === company.name ? 'rotate-180' : ''
                                  }`} 
                                />
                              </button>
                              
                              {/* Second Level: Categories */}
                              {mobileCompanyOpen === company.name && (
                                <div className="pl-4 mt-2 space-y-2">
                                  {company.categories.map((category) => (
                                    <div key={category.name}>
                                      {category.items && category.items.length > 0 ? (
                                        <>
                                          <button
                                            className="flex items-center justify-between w-full py-1 text-[#252525] font-semibold text-sm"
                                            onClick={() => 
                                              setMobileCategoryOpen(
                                                mobileCategoryOpen?.company === company.name && 
                                                mobileCategoryOpen?.category === category.name 
                                                  ? null 
                                                  : { company: company.name, category: category.name }
                                              )
                                            }
                                          >
                                            {category.name}
                                            <ChevronDown 
                                              className={`h-3 w-3 transition-transform ${
                                                mobileCategoryOpen?.company === company.name &&
                                                mobileCategoryOpen?.category === category.name 
                                                  ? 'rotate-180' 
                                                  : ''
                                              }`} 
                                            />
                                          </button>
                                          
                                          {/* Third Level: Items */}
                                          {mobileCategoryOpen?.company === company.name &&
                                           mobileCategoryOpen?.category === category.name && (
                                            <div className="pl-4 mt-1 space-y-1">
                                              {category.items.map((item) => (
                                                <Link
                                                  key={item.name}
                                                  href={item.href}
                                                  className="block py-1 text-[#252525] text-sm"
                                                  onClick={toggleMobileMenu}
                                                >
                                                  {item.name}
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        <Link
                                          href={category.href}
                                          className="block py-1 text-[#252525] font-semibold text-sm"
                                          onClick={toggleMobileMenu}
                                        >
                                          {category.name}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={company.href}
                              className="block py-2 text-[#252525] font-semibold text-sm"
                              onClick={toggleMobileMenu}
                            >
                              {company.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="py-2">
                  <Link
                    href="/gallery"
                    className="block py-2 text-[#252525] font-bold text-base uppercase"
                    onClick={toggleMobileMenu}
                  >
                    Gallery
                  </Link>
                </div>
                <div className="py-2">
                  <Link
                    href="/contact"
                    className="block py-2 text-[#252525] font-bold text-base uppercase"
                    onClick={toggleMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
