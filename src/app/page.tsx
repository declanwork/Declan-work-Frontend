'use client'
import Image from 'next/image';
import Toggle from './components/headerToggle';
import Logo from './components/logoCloud';
import { FiMail } from 'react-icons/fi';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#00360C] font-poppin h-[120vh] flex flex-col overflow-hidden">
        <Navbar />
        <div className="">
          <h1 className="mt-28 text-5xl text-center text-[#00EF7C] font-bold tracking-[0.4px] leading-[65px]">
            Hire Crypto & Web3 Talent:
            <br />
            Unlocking the Power of Blockchain Expertise
          </h1>
          <p className="text-[#ADFFC8] text-center mt-9 tracking-[0.4px] leading-[22px]">
            How to hire Cryptocurrency Talent? Glad you asked! Hire them
            <br />
            directly on Crypto Jobs List.
          </p>
          <div className="text-center mt-9">
            <button className="border border-[#00EF7C] bg-[#00EF7C] text-[#163300] font-semibold py-3 px-4 rounded-full mr-4">
              Hire Freelancers
            </button>
            <button className="border border-[#00EF7C] text-[#00EF7C] font-semibold py-3 px-4 rounded-full">
              I&#39;m a Freelancer
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <Image
              src="/images/hero.jpeg"
              alt="Hero"
              className="ml-64 mt-[70px] rounded-xl shadow-2xl"
              width={480}
              height={200}
            />
          </div>
          <div className="-translate-x-[7.5rem]">
            <div className="text-[#00360C] bottom-5 w-48 left-40 relative h-12 p-1 rounded-3xl flex bg-[#00EF7C] justify-between shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-[#00360C] flex justify-center items-center text-[#00EF7C]"><FiMail /></div>
              <h1 className="font-bold tracking-wide mt-2">Hire</h1>
              <Toggle />
            </div>
            <Image
              src="/images/hero2.jpeg"
              alt="Hero-2"
              className="rounded-xl z-10 shadow-7xl"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-[120vh]">
        <Logo />
      </div>
    </main>
  );
}
