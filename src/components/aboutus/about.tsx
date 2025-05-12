import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#60A7C1] to-[#FFF9E3] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#252525] mb-6">About Us</h1>
              <p className="text-xl text-[#252525] max-w-3xl mx-auto">
                Learn more about our company, our mission, and the values that drive us forward
              </p>
            </div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-[#0076b2] text-3xl font-bold">Welcome to Eshani</h2>

              <p className="text-[#0076b2] text-lg">
                Established in 2000 under the visionary leadership of Chevvakula Chandra Sekhar, Eshani has been at the forefront of delivering innovative industrial solutions for over two decades.
              </p>

              <p className="text-[#29567A]">
                Backed by 32 years of rich experience in industrial marketing, we specialize in providing cutting-edge solutions for weighing machinery, telemetry flow meters, as well as specialty floor and wall coatings.
              </p>

              <p className="text-[#29567A]">
                At Eshani, our mission is to support industries with reliable, high-quality products and services that enhance operational efficiency and performance. We are proud to be a trusted partner for businesses seeking excellence, precision, and long-term value.
              </p>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/eshaniabout.png"
                  alt="Eshani Team"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision Section */}
        <section className="bg-[#f8f9fa] py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0076b2] mb-4">Our Mission</h3>
                <p className="text-[#29567A]">
                  To provide innovative industrial solutions that enhance operational efficiency and performance across diverse sectors. We are committed to delivering products and services of the highest quality, backed by exceptional customer support and technical expertise.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0076b2] mb-4">Our Vision</h3>
                <p className="text-[#29567A]">
                  To be the leading provider of industrial solutions in India, recognized for our commitment to excellence, innovation, and customer satisfaction. We aim to set industry standards and contribute to the technological advancement of various sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-[#0076b2] mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#60A7C1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#252525] mb-2">Excellence</h3>
              <p className="text-[#29567A]">We strive for excellence in everything we do, from product quality to customer service and technical support.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#60A7C1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#252525] mb-2">Innovation</h3>
              <p className="text-[#29567A]">We continuously seek innovative solutions and technologies to address evolving industry challenges.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#60A7C1] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#252525] mb-2">Integrity</h3>
              <p className="text-[#29567A]">We conduct our business with the highest level of integrity, transparency, and ethical standards.</p>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="bg-gradient-to-r from-[#60A7C1] to-[#FFF9E3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#252525] mb-12">Our Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0076b2] mb-4">Weighing Machinery</h3>
                <p className="text-[#29567A]">
                  High-precision weighing solutions for various industrial applications, ensuring accuracy and reliability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0076b2] mb-4">Telemetry Flow Meters</h3>
                <p className="text-[#29567A]">
                  Advanced flow measurement technologies for monitoring and controlling fluid flow in industrial processes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0076b2] mb-4">Specialty Coatings</h3>
                <p className="text-[#29567A]">
                  Premium floor and wall coatings designed for durability, protection, and aesthetic enhancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-[#0076b2] mb-12">Our Leadership</h2>
          
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:flex-shrink-0 mt-4">
                <Image
                  src="/client/team.png"
                  alt="Chevvakula Chandra Sekhar"
                  width={300}
                  height={300}
                  className="object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#252525]">Chevvakula Chandra Sekhar</h3>
                <p className="text-sm text-[#0076b2] mb-4">Founder & CEO</p>
                <p className="text-[#29567A]">
                  With 32 years of experience in industrial marketing, Chandra Sekhar founded Eshani in 2000. His visionary leadership and industry expertise have been instrumental in establishing Eshani as a trusted provider of industrial solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clients & Partners Section */}
       
        
        {/* Contact CTA Section */}
        {/* <section className="bg-gradient-to-r from-[#60A7C1] to-[#FFF9E3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#252525] mb-4">Ready to Partner with Eshani?</h2>
            <p className="text-[#252525] text-lg max-w-2xl mx-auto mb-8">
              Discover how our industrial solutions can enhance your operations and drive your business forward.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#0076b2] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#005a8a] transition-colors duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </section> */}
      </main>
    </div>
  )
}
