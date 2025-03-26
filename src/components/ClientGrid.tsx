import Image from "next/image"

export default function ClientShowcase() {
  const clients = [
    { name: "Star Digital", logo: "/placeholder.svg?height=100&width=100", position: "right" },
    { name: "Star ONE", logo: "/placeholder.svg?height=100&width=100", position: "left" },
    { name: "Design Element", logo: "/placeholder.svg?height=100&width=100", position: "right" },
    { name: "CubeUnity", logo: "/placeholder.svg?height=100&width=100", position: "left" },
    { name: "Consultancy", logo: "/placeholder.svg?height=100&width=100", position: "right" },
    { name: "HiFive", logo: "/placeholder.svg?height=100&width=100", position: "left" },
    { name: "GEOM BUSINESS", logo: "/placeholder.svg?height=100&width=100", position: "right" },
    { name: "Management", logo: "/placeholder.svg?height=100&width=100", position: "left" },
  ]

  return (
    <div className="bg-[#f0e8d9] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#333333] mb-10">OUR CLIENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {/* Row 1 */}
          <div className="flex items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client1.png"
                alt="Star Digital logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">Star Digital</div>
          </div>

          <div className="flex items-center justify-end">
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">Star ONE</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client2.png"
                alt="Star ONE logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">Design Element</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client3.png"
                alt="Design Element logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center md:justify-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client4.png"
                alt="CubeUnity logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">CubeUnity</div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client5.png"
                alt="Consultancy logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">Consultancy</div>
          </div>

          <div className="flex items-center justify-end">
            <div className=" bg-[#2c5478] text-white px-4 py-1 text-sm rounded">HiFive</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client6.png"
                alt="HiFive logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">GEOM BUSINESS</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client7.png"
                alt="GEOM BUSINESS logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center md:justify-center">
            <div className="relative w-24 h-24  flex items-center justify-center">
              <Image
                src="/client/client8.png"
                alt="Management logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">Management</div>
          </div>
        </div>
      </div>
    </div>
  )
}

