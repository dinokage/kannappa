import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow">
        {/* About Company Section */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-[#252525] text-3xl md:text-4xl font-bold mb-8">ABOUT COMPANY</h2>
          <h2 className="text-[#252525] text-3xl md:text-4xl font-bold mb-8">[to be provided by client]</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-[#0076b2] text-3xl font-bold">Established in 1999.</h3>

              <p className="text-[#0076b2]">
                Classique is a business conglomerate engaged in diversified range of energy efficient solutions.
              </p>

              <p className="text-[#0076b2]">
                Classique is an ideal, competent partner offering comprehensive engineering and project management
                capability.
              </p>

              <p className="text-[#0076b2]">
                Classique Engineering Enterprises established in 1999 & supplies a diverse range of air compressors,
                pumps, valves, geared motors, gear boxes, hoists manufactured by global leaders.
              </p>

              <div className="mt-8 space-y-4 text-sm text-[#29567A]">
                <p>
                  In an age where business decisions are taken with short term benefits in mind, CLASSIQUE is an
                  exception. Ever since our inception in 1999 by Mr. Chandra Sekhar Chevakulа, we have assiduously
                  followed strong ethical practices and always harped on doing business the right way.It is this
                  diligence in values, a keen business sense, and strong focus on customer satisfaction has taken the
                  group to becoming a truly world-class integrated business group.
                </p>

                <p>CLASSIQUE is today multi-faceted business group with interests in two business domain including:</p>
                <p>Compressor Business - CECB</p>
                <p>Mechanical & Electrical Business - MEB</p>
                <p>Technometrix - TM</p>

                <p>
                  Over the years, CLASSIQUE has always been the front- runner in adapting new technologies and venturing
                  on to newer markets. Our investments, partnerships, management polices and our internal people
                  practices have enabled our products and services to reach regions. With constant innovation and highly
                  professional team at the helm, CLASSIQUE is all set to expand its territories to wider markets and
                  newer business verticals.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/eshaniabout.png"
                alt="Company illustration"
                width={600}
                height={500}
                className="w-full"
              />

              {/* <div className="absolute top-0 left-0 bg-[#29567a] text-white rounded-br-lg p-4 w-40 h-40 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">11+</div>
                <div className="text-center text-sm">MULTI NATIONAL PRODUCTS</div>
              </div> */}

              {/* <div className="absolute top-0 right-0 bg-[#29567a] text-white rounded-bl-lg p-4 w-40 h-40 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-center text-sm">YEARS OF EXCELLENCE</div>
              </div> */}

              {/* <div className="absolute bottom-10 left-10 bg-[#29567a] text-white rounded-lg p-4 w-40 h-40 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">1K+</div>
                <div className="text-center text-sm">HAPPY CLIENTS</div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
      
      </main>

      {/* Footer */}

    </div>
  )
}

