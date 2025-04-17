import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUp } from "lucide-react"

export default function CompanyCards() {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h2 className="text-4xl font-bold text-[#333333] mb-10">OUR PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* First row */}
        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/essae.png?height=150&width=200"
              alt="Essae device"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          
          <Link href="#" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/nalco.png?height=150&width=200"
              alt="nalco"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <Link href="#" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/stanvac.png?height=150&width=200"
              alt="stanvac"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
         
          <Link href="#" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mx-auto md:max-w-2/3">
        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/cipy.png?height=150&width=200"
              alt="cipy"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
         
          <Link href="#" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/energies.png?height=150&width=200"
              alt="energies"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          {/* <div className="mb-6">
            <Image
              src="/placeholder.svg?height=70&width=150"
              alt="TotalEnergies logo"
              width={150}
              height={70}
              className="mx-auto"
            />
          </div> */}
          <Link href="#" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Top button */}
      <Link
        href="#top"
        className="absolute right-4 top-1/2 bg-blue-600 text-white rounded-full p-2 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="text-xs font-bold absolute -bottom-5">TOP</span>
      </Link>
    </div>
  )
}
