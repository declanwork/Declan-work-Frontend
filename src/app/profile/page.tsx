"use client";
import Image from "next/image";
import NavbarJob from "../components/NavbarJob";
import { useState } from "react";
import { FaPen } from "react-icons/fa";

export default function Profile() {
  const [image, setImage] = useState("/random url");
  const [status, setStatus] = useState("available");
  return (
    <div>
      <NavbarJob />
      <div className="max-w-screen-lg mx-auto text-white bg-[#14A800] h-[180px] flex justify-center items-center rounded-lg px-8 gap-2">
        <h1 className="w-[80%] mx-auto text-2xl">
          Filling out your personal information section will allow us to best
          customise your site experience!
        </h1>
        <div className="flex-1">
          <Image
            src="/images/user_shield.png"
            alt="svg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto border rounded-lg mt-10 py-10">
        <div className="border-b px-12 pb-10 flex items-center justify-between">
          <div className="flex items-center space-x-7">
            <div className="relative">
              <div className="w-40 h-40 bg-black rounded-full overflow-hidden">
                <Image
                  alt="not found"
                  width={1200}
                  height={800}
                  src={image}
                  className="object-cover block"
                />
              </div>
              <div className="absolute top-0 right-0 border border-[#00EF7C] bg-white p-2 rounded-full">
                <FaPen className="text-[#00EF7C]" size={20} />
              </div>
            </div>
            <div>
              <p className="text-[#415361] text-2xl">Obi Somto. E</p>
              <p className="text-black text-xl">Uyo, Nigeria</p>
            </div>
          </div>
          <div className="border border-[#14A800] rounded-2xl">
            <button
              type="button"
              className={`text-black py-3 px-4 rounded-2xl ${
                status === "available" ? "bg-[#00EF7C]" : "bg-transparent"
              }`}
              onClick={() => {
                setStatus("available");
              }}
            >
              Available
            </button>
            <button
              type="button"
              className={`text-black py-3 px-4 rounded-2xl ${
                status === "booked" ? "bg-[#00EF7C]" : "bg-transparent"
              }`}
              onClick={() => {
                setStatus("booked");
              }}
            >
              Booked
            </button>
          </div>
        </div>
        <div className="flex items-start pl-12 gap-5">
          <div className="w-[30%] pt-12">
            {/* Item One */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-medium">Hours Per Week</p>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              <p>More than 30 hrs/week</p>
              <p>No contract-to-hire preference set</p>
            </div>
            {/* Item Two */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-medium">Languages</p>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              <ul className="ml-8">
                <li className="list-disc">English: Fluent</li>
                <li className="list-disc">Igbo: Fluent</li>
                <li className="list-disc">Yoruba: Fluent</li>
              </ul>
            </div>
            {/* Item Three */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-medium">Verifications</p>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              {/* TODO:verifications if any */}
            </div>
            {/* Item Four */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-medium">Education</p>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              <p>University of Uyo</p>
              <p>Bachelor of Science (BS),</p>
              <p>Public Administration</p>
              <p>2017 - 2022</p>
            </div>
          </div>
          <div className="w-[70%] border-l h-full pt-12">
            <div className="border-b px-7 pb-6">
              <div className="flex justify-between items-center mb-7">
                <h1 className="text-center text-xl font-medium">
                  Product designer, brand designer, and Ui/UX design
                </h1>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              <div>
                <p>
                  Detailed oriented and dedicated certified product designer
                  offering a proven track record of success in developing
                  designs concepts and completing relevant experience related to
                  projects spread across several fields like product designs
                  user experience, and user interfaces designs graphics and
                  branding with an average knowledge in market research. I&apos;m
                  effective team player with a proactive approach to
                  understanding briefs.
                </p>
              </div>
            </div>

            <div className="border-b px-7 py-6">
              <div className="flex justify-between items-center mb-7">
                <h1 className="text-center text-xl font-medium">
                  Work History
                </h1>
                
              </div>
              <div>
                <p>
                No work yet. Once you start getting hired on Upwork, your work with clients will show up here browse jobs
                </p>
                <button type="button" className="text-[#14A800] mt-3">Browse Jobs</button>
              </div>
            </div>

            <div className="border-b px-7 py-6">
              <div className="flex justify-between items-center mb-7">
                <h1 className="text-center text-xl font-medium">
                  Work History
                </h1>
                
              </div>
              <div>
                <p>
                No work yet. Once you start getting hired on Upwork, your work with clients will show up here browse jobs
                </p>
                <button type="button" className="text-[#14A800] mt-3">Browse Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
