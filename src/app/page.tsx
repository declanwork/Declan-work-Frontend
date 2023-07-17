"use client";

import Image from "next/image";
import Toggle from "./components/headerToggle";
import Logo from "./components/logoCloud";
import { FiMail } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { BsBriefcase } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaTrademark } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Skills from "./components/skills";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="bg-[#00360C] px-3 h-[1000px] flex flex-col overflow-hidden">
        <div className="">
          <h1 className="mt-20 text-5xl md:text-6xl text-center text-[#00EF7C] font-bold tracking-[0.4px] leading-[65px]">
            Welcome to DeclanWork -<br />
            Empowering the Future of Freelancing
          </h1>
          <p className="text-[#ADFFC8] text-center mt-9 max-w-md mx-auto tracking-[0.4px] leading-[22px]">
            Hire Tech and Web3 Talents
            <br />
            Unlocking the Power of Blockchain Expertise{" "}
          </p>
          <div className="text-center mt-9 flex flex-col md:block space-y-5 mb-5">
            <button
              onClick={() => router.push("/newJob")}
              className="border border-[#00EF7C] bg-[#00EF7C] text-[#163300] font-semibold py-3 px-4 rounded-full sm:mr-4"
            >
              Hire Freelancers
            </button>
            <button
              onClick={() => router.push("/editProfile")}
              className="border border-[#00EF7C] text-[#00EF7C] font-semibold py-3 px-4 rounded-full"
            >
              I&#39;m a Freelancer
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <div className="">
            <Image
              src="/images/hero.jpeg"
              alt="Hero"
              className="ml-10 md:ml-64 rounded-xl shadow-2xl"
              width={480}
              height={200}
            />
          </div>
          <div className="-translate-x-[1.7rem] md:-translate-x-[7.5rem]">
            <div className="text-[#00360C] bottom-5 w-48 left-40 relative h-12 p-1 rounded-3xl md:flex bg-[#00EF7C] justify-between shadow-2xl hidden">
              <div className="w-10 h-10 rounded-full bg-[#00360C] flex justify-center items-center text-[#00EF7C]">
                <FiMail />
              </div>
              <h1 className="font-bold tracking-wide mt-2">Hire</h1>
              <Toggle />
            </div>
            <Image
              src="/images/hero2.jpeg"
              alt="Hero-2"
              className="rounded-xl shadow-7xl"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="bg-white">
        <Logo />
      </div>
      {/* New Div */}
      <section className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-10 mb-10 px-3 lg:px-0">
        <div className="md:w-1/2 w-full bg-[#F2F7F2] h-[530px] flex justify-center items-center">
          <div className="relative">
            <Image
              src="/svg/clipgroup.svg"
              alt="svg"
              width={200}
              height={200}
            />
            <Image
              src="/svg/thumbs.svg"
              alt="thumbs-up"
              width={300}
              height={300}
              className="absolute -bottom-10 -right-32"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold capitalize text-4xl text-[#001E00]">
          Why Choose DeclanWork?
          </h2>
          <div className="">
            <ul>
              <li className="flex my-3">
                <div className="mr-2">
                  <Image
                    src="/svg/Frame.svg"
                    alt="frame"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="">
                  <h5 className="text-[#001E00] font-medium">
                  Tech and Web3 Expertise                  </h5>
                  <p className="text-[#001E00] text-sm">
                    Register and browse professionals, explore projects, or even
                    book a consultation.
                  </p>
                </div>
              </li>
              <li className="flex mb-3">
                <div className="mr-2">
                  <Image
                    src="/svg/pin.svg"
                    alt="frame"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="">
                  <h5 className="text-[#001E00] font-medium">
                    Post a job and hire top talent
                  </h5>
                  <p className="text-[#001E00] text-sm">
                    Finding talent doesn’t have to be a chore. Post a job or we
                    can search for you!
                  </p>
                </div>
              </li>
              <li className="flex mb-10">
                <div className="mr-2">
                  <Image
                    src="/svg/star.svg"
                    alt="frame"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="">
                  <h5 className="text-[#001E00] font-medium">
                    Work with the best—without breaking the bank
                  </h5>
                  <p className="text-[#001E00] text-sm">
                    Declan Work makes it affordable to up your work and take
                    advantage of low transaction rates.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:items-center md:space-y-0">
              <button className="bg-[#00EF7C] border border-[#00EF7C] text-[#00360C] font-medium py-3 px-4 rounded-full">
                Sign up for free
              </button>
              <button className="border border-[#00360C] text-[#00360C] font-medium py-3 px-4 rounded-full">
                Learn how to hire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="max-w-2xl mx-auto px-3 md:px-0">
        <Image
          src="/images/enterprise.jpeg"
          alt="Enterprise"
          width={700}
          height={400}
        />
        <div className="mt-5 mb-10">
          <p className="text-[#001E00] font-semibold text-lg">
            Enterprise Suite
          </p>
          <p className="text-5xl text-[#001E00] my-9">
            This is how good companies find good company.
          </p>
          <p>
            Access the top 1% of talent on DeclanWork, and a full suite of
            hybrid workforce management tools. This is how innovation works now.
          </p>
          <ul className="mt-5 space-y-2">
            <li className="flex items-center space-x-2">
              <LiaToolsSolid size={21} className="text-[#00EF7C]" />
              <p className="text-[#001E00]">
                Access expert talent to fill your skill gaps
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <BsBriefcase size={21} className="text-[#00EF7C]" />
              <p className="text-[#001E00]">
                Control your workflow: hire, classify and pay your talent
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <BiSupport size={21} className="text-[#00EF7C]" />
              <p className="text-[#001E00]">
                Partner with DeclanWork for end-to-end support
              </p>
            </li>
          </ul>
          <button className="bg-[#00EF7C] border border-[#00EF7C] text-[#00360C] font-medium py-3 px-8 rounded-full my-5 w-full md:w-auto">
            Learn More
          </button>
        </div>
      </section>

      <section className="bg-[#ECEFEB] py-20 px-3 xl:px-0">
        <h1 className="text-5xl text-center font-medium mt-9 mb-20 max-w-2xl mx-auto">
          Hire Vetted Engineering, Product, and Design Talent
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto mb-10">
          {/* item */}
          <div className="bg-white py-5 px-10 rounded h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Development & IT
            </h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded  h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Writing & Translation
            </h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded  h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Design & Creative
            </h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">AI Services</h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded  h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Finance & Accounting
            </h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded h-[150px] relative">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Development & IT
            </h1>
            <div className="flex items-center mt-5 absolute bottom-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
        </div>
      </section>
      {/* Do More with Declan Work */}
      <section className="py-20 px-3">
        <h1 className="text-5xl text-center text-[#001E00] font-bold">
          Do More With DeclanWork
        </h1>
        <div className="max-w-screen-lg mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* item */}
          <div className="text-center mb-10 lg:mb-0">
            <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden">
              <Image
                src="/images/item-1.jpeg"
                alt="woman with tea and laptop"
                width={500}
                height={500}
                className="object-cover object-center"
              />
            </div>
            <div className="max-w-xs mx-auto">
              <p className="text-[#001E00] font-medium my-5 text-lg">
                Post a job and hire a pro
              </p>
              <button className="relative  md:-bottom-0 border rounded-[25px] text-[#001E00] font-medium flex items-center justify-center py-3 px-8 mx-auto">
                Talent Marketplace
                <sup>
                  <FaTrademark />
                </sup>
                <BsArrowRight />
              </button>
            </div>
          </div>
          {/* item */}
          <div className="text-center mb-10 md:mb-0">
            <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden">
              <Image
                src="/images/item-2.jpeg"
                alt="woman with tea and laptop"
                width={500}
                height={500}
                className="object-cover object-center"
              />
            </div>
            <div className="max-w-xs mx-auto">
              <p className="text-[#001E00] font-medium my-5 text-lg">
                Browse and buy projects
              </p>
              <button className="relative border rounded-[25px] text-[#001E00] font-medium flex items-center justify-center py-3 px-8 mx-auto">
                Project Catalog
                <sup>
                  <FaTrademark />
                </sup>
                <BsArrowRight />
              </button>
            </div>
          </div>
          {/* item */}
          <div className="text-center mb-10 md:mb-0 relative">
            <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden">
              <Image
                src="/images/item-3.jpg"
                alt=""
                width={500}
                height={500}
                className="object-cover object-center"
              />
            </div>
            <div className="max-w-xs mx-auto">
              <p className="text-[#001E00] font-medium my-5 text-lg">
                Let us help you find the right talent
              </p>
              <button className="border rounded-[25px] text-[#001E00] font-medium flex items-center justify-center py-3 px-8 mx-auto">
                Talent Scout
                <sup>
                  <FaTrademark />
                </sup>
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <section className="py-20 bg-[#00360C] text-white">
        <Footer />
      </section>
    </main>
  );
}
