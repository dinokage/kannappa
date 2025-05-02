"use client";
import { Input } from "../../components/ui/input";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      {/* Main Section */}
      <div className="rounded-b-[50px] mb-8 py-8">
        
      </div>

      {/* Form and Circles Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start py-8 md:py-12 relative z-10">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 space-y-6 z-20 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold">Get in touch with us</h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
            <Image src="/contact/eshanicontact.png" alt="Sales Office" className="w-12 h-12 mb-2 sm:mb-0" width={100} height={100}/>
            <div>                                                                           
              <p className="font-semibold">Register Office</p>
              <p className="text-sm md:text-base">
                Address: ESHANI CLASSIQUE ENGINEERED ENTERPRISE
                D.No.39-24-22/1,First Floor,Narasimhanagar,
                Madhavadhara,Visakhapatnam-530007.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
            <Image src="/contact/eshanicontact2.png" alt="Phone Number" width={100} height={100} className="w-12 h-12 mb-2 sm:mb-0" />
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-sm md:text-base">+91 9346388007 / +91 6303804244</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
            <Image src="/contact/eshanicontact3.png" alt="Email Address" width={100} height={100} className="w-12 h-12 mb-2 sm:mb-0" />
            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-sm md:text-base break-words">chc@eshaniclassique.com / sales@eshaniclassique.com</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10">
          <div
            className="bg-[#29567A] text-white shadow-lg relative w-full sm:w-[450px] h-auto min-h-[500px] rounded-lg p-5 md:p-6 max-w-full"
          >
            <form>
              <div className="space-y-4">
                <Input type="text" placeholder="Your Name" className="text-[#FFF9E3] p-3 w-full" />
                <Input type="email" placeholder="Your Email" className="p-3 text-[#FFF9E3] w-full" />
                <Input type="text" placeholder="Phone Number" className="p-3 text-[#FFF9E3] w-full" />
                <Input type="text" placeholder="Services" className="p-3 text-[#FFF9E3] w-full" />
                
                <textarea
                  placeholder="Message"
                  className="p-3 w-full bg-[#29567A] text-[#FFF9E3] h-32 border rounded-lg resize-none"
                ></textarea>
              </div>
              <button className="bg-[#29567A] hover:bg-[#ECDFCF] hover:text-black text-[#FFF9E3] font-bold py-2 px-4 rounded mt-4 h-fit w-full transition duration-300">
                SEND MESSAGE                 
              </button>
            </form>
          </div>
        </div>          
      </div>
    </div>
  );
}
