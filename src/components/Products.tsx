import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
              width={200}
              height={200}
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
              width={200}
              height={200}
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
              width={200}
              height={200}
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
              width={200}
              height={200}
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
              width={200}
              height={200}
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
    </div>
  )
}
