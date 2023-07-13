"use client";
import Image from "next/image";
import NavbarJob from "../components/NavbarJob";
import { PiUsersThree } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import Footer from "../components/footer";

export default function Community() {
  return (
    <div>
      <NavbarJob />
      <div className="max-w-screen-lg mx-auto text-white bg-[#14A800] h-[180px] flex justify-center items-center rounded-lg px-8 gap-2">
        <h1 className="w-[80%] mx-auto text-2xl">
          Join thousands of web3 talents and discusses issues bordering the Web
          3 space and make some useful contributions to your teammate
        </h1>
        <div className="flex-1">
          <Image src="/images/company.png" alt="svg" width={250} height={132} />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mt-5 text-[#102638]">
        <h1 className="text-3xl font-bold">Community</h1>
        <h1 className="mt-10 text-3xl">Community Chats</h1>
      </div>
      <div className="max-w-screen-lg mx-auto mt-5">
        {/* Development And IT */}
        <div className="border rounded-lg flex gap-5 py-3 pl-2 pr-12 mb-5">
          <div className="border border-[#14A800] w-[13%] h-auto flex items-center justify-center px-2 rounded-lg">
            <Image
              className="hidden h-8 w-auto lg:block"
              src="/images/declan_black.png"
              alt="Your Company"
              width={158}
              height={48}
            />
          </div>
          <div className="flex items-center justify-between w-[87%]">
            <div className="">
              <h1 className="text-3xl text-[#001E00] mb-3">Development & IT</h1>
              <div className="flex items-center text-[#5E6D55] text-xl mb-3">
                <PiUsersThree size={25} className="mr-2" />
                <p>1853 Teammates</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
            </div>

            <button
              type="button"
              className="border border-[#00EF7C] py-3 px-4 rounded-lg hover:bg-[#00EF7C] transition duration-150 ease-in-out"
            >
              Join Community
            </button>
          </div>
          {/* <div>
            
        </div> */}
        </div>
        {/* Writing & Translation */}
        <div className="border rounded-lg flex gap-5 py-3 pl-2 pr-12 mb-5">
          <div className="border border-[#14A800] w-[13%] h-auto flex items-center justify-center px-2 rounded-lg">
            <Image
              className="hidden h-8 w-auto lg:block"
              src="/images/declan_black.png"
              alt="Your Company"
              width={158}
              height={48}
            />
          </div>
          <div className="flex items-center justify-between w-[87%]">
            <div className="">
              <h1 className="text-3xl text-[#001E00] mb-3">
                Writing & Translation
              </h1>
              <div className="flex items-center text-[#5E6D55] text-xl mb-3">
                <PiUsersThree size={25} className="mr-2" />
                <p>1853 Teammates</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
            </div>

            <button
              type="button"
              className="border border-[#00EF7C] py-3 px-4 rounded-lg hover:bg-[#00EF7C] transition duration-150 ease-in-out"
            >
              Join Community
            </button>
          </div>
          {/* <div>
            
        </div> */}
        </div>
        {/* Design & Creative */}
        <div className="border rounded-lg flex gap-5 py-3 pl-2 pr-12 mb-5">
          <div className="border border-[#14A800] w-[13%] h-auto flex items-center justify-center px-2 rounded-lg">
            <Image
              className="hidden h-8 w-auto lg:block"
              src="/images/declan_black.png"
              alt="Your Company"
              width={158}
              height={48}
            />
          </div>
          <div className="flex items-center justify-between w-[87%]">
            <div className="">
              <h1 className="text-3xl text-[#001E00] mb-3">
                Design & Creative
              </h1>
              <div className="flex items-center text-[#5E6D55] text-xl mb-3">
                <PiUsersThree size={25} className="mr-2" />
                <p>1853 Teammates</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
            </div>

            <button
              type="button"
              className="border border-[#00EF7C] py-3 px-4 rounded-lg hover:bg-[#00EF7C] transition duration-150 ease-in-out"
            >
              Join Community
            </button>
          </div>
          {/* <div>
            
        </div> */}
        </div>
        {/* AI Services */}
        <div className="border rounded-lg flex gap-5 py-3 pl-2 pr-12 mb-5">
          <div className="border border-[#14A800] w-[13%] h-auto flex items-center justify-center px-2 rounded-lg">
            <Image
              className="hidden h-8 w-auto lg:block"
              src="/images/declan_black.png"
              alt="Your Company"
              width={158}
              height={48}
            />
          </div>
          <div className="flex items-center justify-between w-[87%]">
            <div className="">
              <h1 className="text-3xl text-[#001E00] mb-3">AI Services</h1>
              <div className="flex items-center text-[#5E6D55] text-xl mb-3">
                <PiUsersThree size={25} className="mr-2" />
                <p>1853 Teammates</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
            </div>

            <button
              type="button"
              className="border border-[#00EF7C] py-3 px-4 rounded-lg hover:bg-[#00EF7C] transition duration-150 ease-in-out"
            >
              Join Community
            </button>
          </div>
          {/* <div>
            
        </div> */}
        </div>
        {/* Finance & Accounting */}
        <div className="border rounded-lg flex gap-5 py-3 pl-2 pr-12 mb-5">
          <div className="border border-[#14A800] w-[13%] h-auto flex items-center justify-center px-2 rounded-lg">
            <Image
              className="hidden h-8 w-auto lg:block"
              src="/images/declan_black.png"
              alt="Your Company"
              width={158}
              height={48}
            />
          </div>
          <div className="flex items-center justify-between w-[87%]">
            <div className="">
              <h1 className="text-3xl text-[#001E00] mb-3">
                Finance & Accounting
              </h1>
              <div className="flex items-center text-[#5E6D55] text-xl mb-3">
                <PiUsersThree size={25} className="mr-2" />
                <p>1853 Teammates</p>
              </div>
              <div className="flex items-center">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
            </div>

            <button
              type="button"
              className="border border-[#00EF7C] py-3 px-4 rounded-lg hover:bg-[#00EF7C] transition duration-150 ease-in-out"
            >
              Join Community
            </button>
          </div>
          {/* <div>
            
        </div> */}
        </div>
      </div>
      <div className="text-right mb-3 max-w-screen-lg mx-auto px-5">
        <button type="button" className="text-[#00EF7C]">
          View More...
        </button>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
