import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export default function LocationSection() {
  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#252525] tracking-tight">OUR LOCATION</h2>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="mt-1 bg-[#29567a] rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="text-[#252525] text-sm sm:text-base">
                <p className="font-medium">Eshani Classique Engineering Enterprises</p>
<p>D.No.39-24-22/1,First Floor,Narasimhanagar,</p>
<p>Madhavadhara,Visakhapatnam-530007.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-[#29567a] rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="text-[#252525] text-sm sm:text-base">
                <p className="break-words">chc@eshaniclassique.com / sales@eshaniclassique.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-[#29567a] rounded-full p-1.5 sm:p-2 flex-shrink-0">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="text-[#252525] text-sm sm:text-base">
                <p className="whitespace-normal">+91 9346388007 / +91 6303804244</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
              <Image
                src="/location.png"
                alt="Location map with pins"
                width={500}
                height={400}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
