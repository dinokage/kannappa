import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CompanyCards() {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h2 className="text-4xl font-bold text-[#333333] mb-10">OUR PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Link href="/products/essae" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
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
          <Link href="/products/nalco" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="border rounded-md p-6 flex flex-col items-center justify-between">
          <div className="mb-4">
            <Image
              src="/logos/pidilite.jpg?height=150&width=200"
              alt="pidilite"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <Link href="/products/pidilite" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
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
          <Link href="/total-lubricants" className="border border-dashed rounded-md px-4 py-2 inline-flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
