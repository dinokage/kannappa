import Image from "next/image"
// import { Twitter, Facebook, Linkedin } from "lucide-react"
// import Link from "next/link"

export default function GalleryPage() {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/gallery/gallery/certificate1.png", alt: "Factory workers discussing" },
    {id: 2, src: "/gallery/gallery/certificate2.png", alt: "Factory workers discussing"},
    {id: 3, src: "/gallery/gallery/certificate3.png", alt: "Factory workers discussing"},
    {id: 4, src: "/gallery/gallery/certificate4.png", alt: "Factory workers discussing"},
    {id: 5, src: "/gallery/gallery/certificate5.png", alt: "Factory workers discussing"},
    {id: 6, src: "/gallery/gallery/certificate6.png", alt: "Factory workers discussing"},
    {id: 7, src: "/gallery/gallery/certificate7.png", alt: "Factory workers discussing"},
    {id: 9, src: "/gallery/gallery/certificate8.png", alt: "Factory workers discussing"},
   
  ]

  return (
    <div className="flex flex-col min-h-screen">

      {/* Gallery Header */}
      <div className="text-black py-8 rounded-b-[50px] mb-6">
        <div className="container mx-auto text-center px-4">

          {/* Gallery Tabs - Responsive layout */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <button className="pb-2 border-b-2 text-gray-400 font-medium text-sm sm:text-base">Images</button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm sm:text-base">
              Videos
            </button>
            <button className="pb-2 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm sm:text-base">
              Documents
            </button>
            <button className="pb-2 border-b-2 border-transparent text-black hover:text-white font-medium text-sm sm:text-base">
              Certificates & Awards
            </button>
          </div>
        </div>
      </div>                                              

      {/* Gallery Grid */}
      <main className="container mx-auto px-4 flex-grow mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover aspect-[2/2]"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
