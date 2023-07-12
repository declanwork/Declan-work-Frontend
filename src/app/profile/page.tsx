"use client";
import Image from "next/image";
import NavbarJob from "../components/NavbarJob";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import Footer from "@/app/components/footer";

export default function Profile() {
  const [image, setImage] = useState("/random url");
  const [status, setStatus] = useState("available");
  const [display, setDisplay] = useState([
    {
      name: "Obi Somto. E",
      city: "Uyo",
      country: "Nigeria",
      hoursPerWeek: "More than 30 hrs",
      contractPreference: "No contract-to-hire preference set",
      language: ["English: Fluent", "Igbo: Fluent", "Yoruba: Fluent"],
      university: "University of Uyo",
      degree: "Bachelor of Science (BS),",
      department: "Public Administration",
      yearOfStudy: "2017-2022",
      careerTitle: "Product designer, brand designer, and Ui/UX design",
      bio: "Detailed oriented and dedicated certified product designer offering a proven track record of success in developing designs concepts and completing relevant experience related to projects spread across several fields like product designs user experience, and user interfaces designs graphics and branding with an average knowledge in market research. I'm an effective team player with a proactive approach to understanding briefs.",
    },
  ]);
  return (
    <div>
      <NavbarJob />
      {display.map(
        (
          {
            name,
            city,
            country,
            hoursPerWeek,
            contractPreference,
            language,
            university,
            degree,
            department,
            yearOfStudy,
            careerTitle,
            bio,
          },
          index
        ) => (
          <div key={index} className="">
            <div className="max-w-screen-lg mx-auto text-white bg-[#14A800] h-[180px] flex justify-center items-center rounded-lg px-8 gap-2">
              <h1 className="w-[80%] mx-auto text-2xl">
                Filling out your personal information section will allow us to
                best customise your site experience!
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
            <div className="max-w-screen-lg mx-auto border rounded-lg mt-10 pt-10">
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
                    <p className="text-[#415361] text-2xl">{name}</p>
                    <p className="text-black text-xl">
                      {city}, {country}
                    </p>
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
                    <p>{hoursPerWeek}/week</p>
                    <p>{contractPreference}</p>
                  </div>
                  {/* Item Two */}
                  <div className="mb-10">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xl font-medium">Languages</p>
                      <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                        <FaPen className="text-[#00EF7C]" size={20} />
                      </div>
                    </div>
                    {language.map((lang, index) => (
                      <ul key={index} className="ml-8">
                        <li className="list-disc">{lang}</li>
                      </ul>
                    ))}
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
                    <p>{university}</p>
                    <p>{degree}</p>
                    <p>{department}</p>
                    <p>{yearOfStudy}</p>
                  </div>
                </div>
                <div className="w-[70%] border-l h-full pt-12">
                  <div className="border-b px-7 pb-6">
                    <div className="flex justify-between items-center mb-7">
                      <h1 className="text-center text-xl font-medium">
                        {careerTitle}
                      </h1>
                      <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                        <FaPen className="text-[#00EF7C]" size={20} />
                      </div>
                    </div>
                    <div>
                      <p>{bio}</p>
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
                        No work yet. Once you start getting hired on Upwork,
                        your work with clients will show up here browse jobs
                      </p>
                      <button type="button" className="text-[#14A800] mt-3">
                        Browse Jobs
                      </button>
                    </div>
                  </div>

                  <div className="border-b px-7 py-6">
                    <div className="flex justify-between items-center mb-7">
                      <h1 className="text-center text-xl font-medium">
                        Portfolio
                      </h1>
                    </div>
                    <div>
                      <div className="my-10">
                        <Image
                          src="/images/brown-bag.png"
                          alt="svg"
                          width={163}
                          height={156}
                          className="mx-auto"
                        />
                      </div>
                      <p className="text-center">
                        Talent who add portfolios to their profile are more
                        likely to win work. (+20%)
                      </p>
                      <div className="text-center">
                        <button type="button" className="text-[#14A800] mt-3 ">
                          Add Portfolio
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" px-7 py-6">
                    <div className="flex justify-between items-center mb-7">
                      <h1 className="text-center text-xl font-medium">
                        Skills
                      </h1>
                      <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                        <FaPen className="text-[#00EF7C]" size={20} />
                      </div>
                    </div>
                    <div className="flex space-x-5 mt-2">
                      <div className="bg-[#415361] py-2 px-4 rounded-lg">
                        <p className="text-sm text-white">Web Design</p>
                      </div>
                      <div className="bg-[#415361] py-2 px-4 rounded-lg">
                        <p className="text-sm text-white">Graphic Design</p>
                      </div>
                      <div className="bg-[#415361] py-2 px-4 rounded-lg">
                        <p className="text-sm text-white">Adobe Illustrator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10 border rounded-lg py-10 max-w-screen-lg mx-auto">
              <div className="border-b px-12 pb-10">
                <h1 className="text-2xl font-medium">
                  Certifications And Experience
                </h1>
                <div className="my-10">
                  <Image
                    src="/images/certificate_of_honor.png"
                    alt="svg"
                    width={163}
                    height={231}
                    className="mx-auto"
                  />
                </div>
                <p className="text-center">
                  Listing your certifications can help prove your specific
                  knowledge or abilities. You can add them manually
                </p>
                <div className="text-center">
                  <button type="button" className="text-[#14A800] mt-3 ">
                    Add Manually
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center px-12 py-10">
                <h1 className="text-center text-2xl font-medium">
                  Employment History
                </h1>
                <div className="border border-[#00EF7C] bg-white p-2 rounded-full">
                  <FaPen className="text-[#00EF7C]" size={20} />
                </div>
              </div>
              <div className="px-12">
                <p className="text-xl">Product Manager | disgn pluse</p>
                <p className="text-xl">June 2022 - Present</p>
              </div>
            </div>
            <section className="py-20 bg-[#00360C]">
              <Footer />
            </section>
          </div>
        )
      )}
    </div>
  );
}
