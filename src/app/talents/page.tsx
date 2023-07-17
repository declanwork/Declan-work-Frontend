"use client";
import { useState } from "react";
import NavbarJob from "../components/NavbarJob";
import Image from "next/image";
import Footer from "../components/footer";

export default function Talents() {
  const [image, setImage] = useState("/random url");
  const [talents, setTalents] = useState([
    {
      jobTitle: "Head of Sales",
      company: "Zondacrypto",
      availableSince: "Today",
      jobLocation: "Remote",
      department: "Sales",
      JobType: "Full-Time",
      interests: [
        "Blockchain",
        "Business Development",
        "Crypto",
        "Non-Tech",
        "Web3",
      ],
    },
    {
      jobTitle: "Product Marketer",
      company: "Talisman",
      availableSince: "Today",
      jobLocation: "Remote",
      department: "Marketing",
      JobType: "Contract, Freelance, Part-Time",
      rate: "$40K - $70K",
      interests: [
        "Content Marketing",
        "Crypto Pay",
        "Crypto Payroll",
        "Non-Tech",
        "Product",
        "Product Marketing",
        "Social Media Marketing"
      ],
    },
    {
      jobTitle: "Solidity Smart Contract Auditor",
      company: "Multisig Capital",
      availableSince: "Today",
      jobLocation: "Copenhagen, Lisbon",
      department: "Engineering",
      JobType: "Full-Time",
      rate: "$100K - $160K",
      interests: [
        "Auditor",
        "Engineer",
        "EVM",
        "Smart Contracts",
        "Solidity",
      ],
    },
    {
      jobTitle: "Research Analyst",
      company: "Talisman",
      availableSince: "Today",
      jobLocation: "Copenhagen, Lisbon",
      department: "Operations",
      JobType: "Full-Time",
      rate: "$64K - $105K",
      interests: [
        "Investment Analyst",
        "Research",
      ],
    },
    {
      jobTitle: "Lead Core Developer",
      company: "Talisman",
      availableSince: "Today",
      jobLocation: "Copenhagen, Lisbon",
      department: "Engineering",
      JobType: "Full-Time",
      rate: "$84K - $158K",
      interests: [
        "Developer",
      ],
    },
    {
      jobTitle: "Business Development Intern",
      company: "Gelato Network",
      availableSince: "1d",
      jobLocation: "Remote",
      department: "Sales",
      JobType: "Internship",
      rate: "",
      interests: [
        "Business Development",
        "DeFi",
        "Entry-Level",
        "Ethereum",
        "Gaming",
        "Non-Tech",
        "Web3"
      ],
    },
    {
      jobTitle: "Data Engineering (Europe Remote)",
      company: "Gelato Network",
      availableSince: "1d",
      jobLocation: "Remote, Europe",
      department: "Engineering",
      JobType: "Full-Time",
      rate: "",
      interests: [
        "Data",
        "Elasticsearch",
        "Engineer",
        "Ethereum",
        "GraphQL",
        "NoSQL",
        "PostgreSQL",
        "Redis",
        "Software Engineer",
        "Web3"
      ],
    },
    {
      jobTitle: "Senior Product Designer",
      company: "Co:Create",
      availableSince: "",
      jobLocation: "Remote, Canada, North America, South Amarica, US",
      department: "Design",
      JobType: "Full-Time",
      rate: "$144K - $176.8K",
      interests: [
        "Non-Tech",
        "Product",
        "Product Designer",
        "Web3",
      ],
    },
    
  ]);
  return (
    <div className="">
      <NavbarJob />
      <div className="max-w-screen-lg mx-auto px-3 xl:px-0">
        <h1 className="my-9 text-black text-3xl font-medium">
          Available Talents
        </h1>
        <div className="rounded overflow-hidden mb-8">
          {talents.map(
            (
              {
                jobTitle,
                company,
                availableSince,
                jobLocation,
                department,
                JobType,
                rate,
                interests,
              },
              index: any
            ) => (
              <div key={index} className="relative bg-[#F9FBFC] border-t first:border-t-0 border-b last:border-b-0 pt-5 pb-20 md:pb-5 px-8">
                <div className="flex items-center justify-between">
                  <div className=" flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
                      <Image
                        alt="not found"
                        width={1200}
                        height={800}
                        src={image} //TODO: get image correctly from talents array
                        className="object-cover block"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#001E00] text-2xl font-bold">
                        {jobTitle}
                      </p>
                      <p className="text-[#001E00]">{company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 absolute bottom-3 md:relative flex-row-reverse md:flex-row">
                    <p className="text-sm text-[#415361]">{availableSince}</p>
                    <button className="bg-[#001E00] text-white py-3 px-4 rounded-full">
                      Invite to Work
                    </button>
                  </div>
                </div>

                <div className="px-14 mt-5">
                  <p className="text-sm text-[#415361]">
                    {jobLocation} &middot; {department} &middot; {JobType} &middot; {rate}
                  </p>
                </div>

                <div className="px-14 mt-5">
                    <ul className="flex items-center gap-3 flex-wrap">
                  {interests.map((interest, index: any) => (
                    <li key={index} className="text-sm border border-[#415361] text-[#415361] p-2 rounded-lg">
                      {interest}
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
