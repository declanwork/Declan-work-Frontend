"use client";
import NavbarJob from "@/components/NavbarJob";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Footer from "../../components/footer";
import { BsThreeDotsVertical } from "react-icons/bs";
// jobsNav, setJobsNav
export default function Dashboard() {
  const [jobsNav, setJobsNav] = useState("Job Profile");
  const [blogsNav, setBlogsNav] = useState("Blog Profile");
  const [display, setDisplay] = useState([
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
  ]);
  const [blogPosts, setBlogPosts] = useState([
    {
      userName: "Vulcan Blockchain",
      timePosted: "1 day",
      blogHeading: "We are Unlocking 55% APY Rebase Rewards Early!",
      blogPost:
        "Great news! We are activating our 55% APY rebase rewards to all VUL sacrificers and Vulcan node holders early, starting on July 1st 2023 in a way to show how much we value our loyal and vullish community.Due to the adjustment in Vulcan’s Mainnet launch roadmap, we would like to take this time to recognize the incredible patience and unwavering support of our community. With this in mind, we have made the exciting decision to enable rebases ahead of schedule. Starting from July 1st until the official Mainnet launch, we will activate Vulcan’s rebasing, ensuring that your current balances will experience continuous growth through to Mainnet......",
      blogCategory: "Cryptocurrency",
      length: "5 mins",
    },
    {
      userName: "Vulcan Blockchain",
      timePosted: "1 day",
      blogHeading: "We are Unlocking 55% APY Rebase Rewards Early!",
      blogPost:
        "Great news! We are activating our 55% APY rebase rewards to all VUL sacrificers and Vulcan node holders early, starting on July 1st 2023 in a way to show how much we value our loyal and vullish community.Due to the adjustment in Vulcan’s Mainnet launch roadmap, we would like to take this time to recognize the incredible patience and unwavering support of our community. With this in mind, we have made the exciting decision to enable rebases ahead of schedule. Starting from July 1st until the official Mainnet launch, we will activate Vulcan’s rebasing, ensuring that your current balances will experience continuous growth through to Mainnet......",
      blogCategory: "Cryptocurrency",
      length: "5 mins",
    },
  ]);

  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("/random url");
  return (
    <div>
      <NavbarJob />
      <div className="py-10 mx-auto max-w-[1150px]">
        <div className="bg-[#00360C] h-[250px] w-full rounded-lg relative text-center flex items-center">
          <div className="w-[150px] border border-red-600 h-[100px] absolute top-10 left-28">
            <div className="relative border border-blue-600">
              <Image
                src="/svg/jobPost.svg"
                alt="svg"
                width={200}
                height={200}
              />
              <Image
                src="/svg/thumbs.svg"
                alt="thumbs-up"
                width={300}
                height={300}
                className="absolute -bottom-10 -right-20"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-start gap-10">
          {/* PROFILE */}
          <div className="border border-[#00EF7C] w-[30%] p-5 rounded-lg">
            <h1 className="text-center">Profile Dashboard</h1>
            <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden my-5">
              <Image
                alt="not found"
                width={1200}
                height={800}
                src={image}
                className="object-cover block"
              />
            </div>
            <p className="text-black font-medium text-xl text-center">
              Obi Somto. E
            </p>
            {/* Job Title */}
            <p className="text-black font-medium text-xl text-center">
              UI/UX Designer
            </p>
            {/* ACTIVE */}
            <div className="p-3 border border-[#415361] rounded-lg my-5">
              <h1 className="text-2xl font-medium">Active</h1>
              <div className="flex justify-between items-center my-2">
                <p className="text-sm">Submitted Proposals</p>
                <p>[3]</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">Invitations for Interview</p>
                <p>[2]</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">Offers</p>
                <p>[1]</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Active Proposals</p>
                <p>[1]</p>
              </div>
            </div>
            {/* PROPOSALS */}
            <div className="p-3 border border-[#415361] rounded-lg mb-5">
              <h1 className="text-2xl font-medium mb-2">Proposals</h1>
              <Link href="/proposals" className="underline">
                My proposals
              </Link>
              <p className="mt-2">3 Submitted Proposal</p>
            </div>
            {/* AVAILABILITY */}
            <div className="p-3 border border-[#415361] rounded-lg">
              <h1 className="text-2xl font-medium">Availability</h1>
              <div className="my-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Hours Per Week</p>
                  <FaPen />
                </div>
                <p>More Than 30 Hrs/Week</p>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Profile Visibility</p>
                  <FaPen />
                </div>
                <p>Private</p>
              </div>

              <div className="">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Job Preference</p>
                  <FaPen />
                </div>
                <p>No Preference Set</p>
              </div>
            </div>
          </div>
          {/* MAIN */}
          <div className="w-[80%] rounded-lg border border-[#CCD1D5] py-4">
            {/* NAVIGATION DIV */}
            <div className="border-b-2 px-8">
              <h1 className="text-3xl font-medium">Explore Jobs</h1>
              <div className="flex items-center space-x-10 py-4">
                <button
                  onClick={() => {
                    setJobsNav("Job Profile");
                  }}
                >
                  Job Profile
                </button>
                <button
                  onClick={() => {
                    setJobsNav("General");
                  }}
                >
                  General
                </button>
                <button
                  onClick={() => {
                    setJobsNav("Saved Job");
                  }}
                >
                  Saved Job
                </button>
              </div>
            </div>
            {/* DASHBOARD ITEMS*/}
            {jobsNav === "Job Profile" && display.length > 0 && (
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
                    <div
                      key={index}
                      className="px-8 border-b py-8 relative mt-3"
                    >
                      <div className="flex items-center absolute right-5 top-0">
                        {!checked ? (
                          <AiOutlineHeart
                            size={25}
                            onClick={() => setChecked(true)}
                          />
                        ) : (
                          <AiFillHeart
                            size={25}
                            onClick={() => setChecked(false)}
                          />
                        )}
                        <BsThreeDotsVertical size={20} />
                      </div>
                      <h1 className="text-[#415361] text-5xl">{heading}</h1>
                      <div className="my-4 flex items-center space-x-4">
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
                      <p>{description}</p>
                      <div className="flex items-center space-x-4 my-4">
                        <p className="text-sm text-[#777777]">
                          Skills Required:
                        </p>
                        {skillsRequired.map((skills) => (
                          <div
                            key={skills}
                            className="bg-[#9AA3AA80] py-2 px-4 rounded-full"
                          >
                            <p className="text-sm text-[#102638]">{skills}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-[#777777]">
                            Payment Method: {paymentMethod}
                          </p>
                          <p className="text-sm text-[#777777]">
                            Location: {location}
                          </p>
                        </div>
                        <button className="bg-[#00EF7C] py-3 px-4 rounded-full text-sm text-[#00360C]">
                          Apply
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <div className="text-right mt-2">
          <Link href="/" className="text-[#00EF7C]">
            Explore More Jobs...
          </Link>
        </div>
        {/* Blog Section */}
        <div className="pt-4 rounded-lg border border-[#CCD1D5] w-full mt-14">
          <div className="border-b-2 px-20">
            <h1 className="text-3xl font-medium mb-2">Blog Posts</h1>
            {/* BUTTON SECTION START */}
            <div className="flex items-center space-x-10 py-4">
              <button
                onClick={() => {
                  setBlogsNav("Blog Profile");
                }}
              >
                Blog Profile
              </button>
              <button
                onClick={() => {
                  setBlogsNav("General");
                }}
              >
                General
              </button>
              <button
                onClick={() => {
                  setBlogsNav("Saved Blogs");
                }}
              >
                Saved Blogs
              </button>
            </div>
            {/* BUTTON SECTION END */}
          </div>
          {/* Blog posts */}
          {blogsNav === "Blog Profile" && blogPosts.length > 0 && (
            <div className="">
              {blogPosts.map(
                (
                  {
                    userName,
                    timePosted,
                    blogHeading,
                    blogPost,
                    blogCategory,
                    length,
                  },
                  index
                ) => (
                  <div key={index} className="px-20 py-4 relative border-b">
                    <div className="flex items-center absolute right-0 top-0">
                        {!checked ? (
                          <AiOutlineHeart
                            size={25}
                            onClick={() => setChecked(true)}
                          />
                        ) : (
                          <AiFillHeart
                            size={25}
                            onClick={() => setChecked(false)}
                          />
                        )}
                        <BsThreeDotsVertical size={20} />
                      </div>
                    <div className=" flex items-center space-x-4 mt-5">
                      <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
                        <Image
                          alt="not found"
                          width={1200}
                          height={800}
                          src={image}
                          className="object-cover block"
                        />
                      </div>
                      <p>
                        {userName} &middot; {timePosted}
                      </p>
                    </div>
                    <div className="flex items-center gap-12">
                      <div className="flex-1">
                        <h1 className="text-xl text-[#102638] font-medium">
                          {blogHeading}
                        </h1>
                        <p className="text-sm font-medium mt-5">{blogPost}</p>
                      </div>
                      <div className="w-48 h-48 bg-black overflow-hidden my-5">
                        {/* input image here */}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-[#9AA3AA80] py-2 px-4 rounded-full">
                        <p className="text-sm text-[#102638]">{blogCategory}</p>
                      </div>
                      <div className="">
                        <p className="text-sm text-[#102638]">{length} read</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
