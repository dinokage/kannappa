import Image from "next/image"

export default function ClientShowcase() {

  return (
    <div className="py-12 px-4 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#333333] mb-10">OUR CLIENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
          {/* Row 1 */}
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client1.png"
                alt="bissel logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center ml-4">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client2.png"
                alt="devifishers logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client3.png"
                alt="Design Element logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center ml-4">
            <div className="relative  flex items-center justify-center">
              <Image
                src="/client/client4.png"
                alt="pidilite logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client5.png"
                alt="Consultancy logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center ml-4">

            <div className="relative  flex items-center justify-center">
              <Image
                src="/client/client6.png"
                alt="pfizer logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-end md:justify-center">
            <div className="relative flex items-center justify-center">
              <Image
                src="/client/client7.png"
                alt="cpf logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center  ml-4">
            <div className="relative  flex items-center justify-center">
              <Image
                src="/client/client8.png"
                alt="united logo"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

