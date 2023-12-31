"use client";
import NavbarJob from "@/app/components/NavbarJob";
import Footer from "@/app/components/footer";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function JobPost() {
  const [checked, setChecked] = useState(false);
  const [display, setDisplay] = useState([
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd the overall user interface, screens, and components For the app based on provided wireframes and guidelines, as well as create visually appealing and engaging designs that embody the app's unique concept while maintaining a modern and user-friendly interface.",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
      city: "Alabama",
      time: "4:00pm",
      jobsPosted: "657",
      openJobs: "16",
      hireRate: "77%",
      exactRating: "4.986263612",
      roundOffRating: "4.99",
      totalReviews: "489",
      companyType: "Mid-sized company (10-99 people)",
      dateJoined: "May 25, 2022",
      hires: "524",
      active: "7",
      ratePerHour: "$8.11",
      totalHours: "201",
    },
  ]);
  return (
    <div>
      <NavbarJob />
      <div className="max-w-[1100px] mx-auto px-3 md:px-0">
        <div className="flex items-start flex-col md:flex-row gap-10">
          <div className="md:w-[70%] w-full border rounded-lg">
            <div>
              {display.map(
                (
                  {
                    heading,
                    levelRequired,
                    budget,
                    timePosted,
                    description,
                    skillsRequired,
                    paymentMethod,
                    location,
                  },
                  index
                ) => (
                  <div key={index} className="border-b last:border-b-0 py-8 relative mt-3">
                    <div className="md:px-8 px-4 border-b">
                      <h1 className="text-[#415361] text-3xl md:text-5xl">{heading}</h1>
                      <div className="my-4 flex md:items-center flex-col md:space-x-4">
                        <p className="text-sm text-[#777777]">
                          Level Required: {levelRequired}
                        </p>
                        <p className="text-sm text-[#777777]">
                          Est. budget: {budget}
                        </p>
                        <p className="text-sm text-[#777777]">
                          Posted {timePosted} ago
                        </p>
                      </div>
                    </div>
                    <div className="md:px-8 px-4 py-8 border-b">
                      <p className="text-sm">{description}</p>
                      <p className="mt-5 text-sm">
                        please send your past ui projects and bid the exact
                        amount you can take for this project
                      </p>
                    </div>
                    <div className="md:px-8 px-4 pt-8">
                      <h1 className="font-medium ">Contract-to-hire</h1>
                      <div className="flex md:items-center flex-col space-y-5 md:space-y-0 md:flex-row justify-between mt-3 mb-5">
                        <p>
                          This job has the potential to turn into a full time
                        </p>
                        <p>Project Type: Ongoing project</p>
                      </div>
                      <div className=" my-5">
                        <p className="text-sm text-[#777777]">
                          Skills and Expertise
                        </p>
                        <div className="flex flex-wrap gap-3 md:gap-0 md:space-x-5 mt-2">
                          {skillsRequired.map((skills) => (
                            <div
                              key={skills}
                              className="bg-[#415361] py-2 px-4 rounded-lg"
                            >
                              <p className="text-sm text-white">{skills}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {display.map(
            (
              {
                location,
                city,
                time,
                jobsPosted,
                openJobs,
                hireRate,
                exactRating,
                roundOffRating,
                totalReviews,
                companyType,
                dateJoined,
                hires,
                active,
                ratePerHour,
                totalHours,
              },
              index
            ) => (
              <div key={index} className="md:w-[30%] w-full border rounded-lg px-6">
                <h1 className="text-2xl text-center my-5">About The Client</h1>
                <div className="text-[#102638] mb-5">
                  <h1 className="font-semibold">Country</h1>
                  <p>{location}</p>
                  <p>
                    {city} {time}
                  </p>
                </div>
                <div className="text-[#102638] mb-5">
                  <h1 className="font-semibold">Jobs Posted</h1>
                  <p>{jobsPosted} Jobs Posted</p>
                  <p>
                    {hireRate} hire rate, {openJobs} open jobs
                  </p>
                </div>
                <div className="text-[#102638] mb-5">
                  <h1 className="font-semibold">Rating</h1>
                  <p>Is {exactRating} Out of 5</p>
                  <p>
                    {roundOffRating} of {totalReviews} reviews
                  </p>
                </div>
                <div className="text-[#102638] mb-5">
                  <h1 className="font-semibold">Sales & Marketing</h1>
                  <p>{companyType}</p>
                  <p>Member since {dateJoined}</p>
                </div>
                <div className="text-[#102638] mb-5">
                  <h1 className="font-semibold">Hires And Rates</h1>
                  <p>
                    {hires} hires, {active} active
                  </p>
                  <p>{ratePerHour}/hr avg hourly rate paid</p>
                  <p>{totalHours} hours</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="border py-8 mt-20 rounded-lg md:w-[67.5%]">
          <div className="px-8 py-2 border-b">
            <h1 className="text-3xl md:text-5xl text-[#415361] mb-2">
              Client&apos;s recent history (0)
            </h1>
            <h1 className="text-3xl md:text-5xl text-[#415361]">Jobs in progress</h1>
          </div>
          
        </div>
        <div className="mb-20 mt-10 w-[67.5%] text-right">
          <Link
            href="JobPost/SubmitProposal"
            className="bg-[#14A800] py-3 px-4 rounded-lg text-white"
          >
            Submit Proposal
          </Link>
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
