import Image from "next/image"

export default function ClientShowcase() {

  return (
    <div className="py-12 px-4 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#333333] mb-10">OUR CLIENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          {/* Row 1 */}
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client1.png"
                alt="Star Digital logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">STAR DIGITAL</div>
          </div>

          <div className="flex items-center justify-end">
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">STAR ONE</div>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/client/client2.png"
                alt="STAR ONE logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">DESIGN ELEMENT</div>
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
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">CUBEUNITY</div>
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
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">CONSULTANCY</div>
          </div>

          <div className="flex items-center justify-end">
            <div className=" bg-[#2c5478] text-white px-4 py-1 text-sm rounded">HIFIVE</div>
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
                width={800}
                height={800}
                className="object-contain"
              />
            </div>
            <div className="bg-[#2c5478] text-white px-4 py-1 text-sm rounded">MANAGEMENT</div>
          </div>
        </div>
      </div>
    </div>
  )
}

