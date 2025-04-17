/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"

export default function ProductCard({name, description, url}: {name: string, description: string, url: string}) {
    return (
      <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Left side with logo and equipment image */}
          <div className="p-6 flex flex-col items-center justify-center bg-white md:w-2/5">
            {/* <div className="mb-6">
              <Image
                src={url}
                alt="Atlas Copco logo"
                width={250}
                height={150}
                className="object-contain"
              />
            </div> */}
            <div className="w-full max-w-[200px]">
              
            </div>
          </div>
  
          {/* Right side with company description */}
         
        </div>
      </div>
    )
  }