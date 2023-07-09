"use client";
import NavbarJob from "@/components/NavbarJob";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineSearch } from "react-icons/ai";
import Footer from "../../components/footer";
import { BsThreeDotsVertical } from "react-icons/bs";

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
          <div className="w-[150px] h-[100px] absolute top-10 left-28">
            <div className="relative">
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
          <div className="flex flex-col justify-center items-center mx-auto space-y-8">
          <div className="mx-auto ">
            <h1 className="text-5xl font-medium text-white max-w-2xl">&ldquo;Your Skills, Your Rules, Freelancing Unleashed!&rdquo;</h1>
          </div>
          <div className=" text-center mx-auto border pl-5 rounded-full  relative flex space-x-3 items-center">
            <AiOutlineSearch className="absolute left-3 text-white" size={20} />
            <input type="text" placeholder="Search for Jobs" className="focus:ring-0 outline-none active:outline-none bg-transparent text-sm border-none text-white"/>
            <button className="bg-[#00EF7C] radius-full text-sm text-black py-3 px-4 rounded-full">Search</button>
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
              <div className="flex items-center space-x-10 pt-4">
                <button
                  onClick={() => {
                    setJobsNav("Job Profile");
                  }}
                  className={`${jobsNav === "Job Profile" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
                >
                  Job Profile
                </button>
                <button
                  onClick={() => {
                    setJobsNav("General");
                  }}
                  className={`${jobsNav === "General" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
                >
                  General
                </button>
                <button
                  onClick={() => {
                    setJobsNav("Saved Job");
                  }}
                  className={`${jobsNav === "Saved Job" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
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
            <div className="flex items-center space-x-10 pt-4">
              <button
                onClick={() => {
                  setBlogsNav("Blog Profile");
                }}
                className={`${blogsNav === "Blog Profile" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
              >
                Blog Profile
              </button>
              <button
                onClick={() => {
                  setBlogsNav("General");
                }}
                className={`${blogsNav === "General" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
              >
                General
              </button>
              <button
                onClick={() => {
                  setBlogsNav("Saved Blogs");
                }}
                className={`${blogsNav === "Saved Blogs" ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded" : "pb-4"}`}
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
                    <div className="flex items-center absolute right-5 top-3">
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
      <section className="bg-[#ECEFEB] py-20 px-3 xl:px-0">
        <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-medium">
        Community Forum
        </h1>
        <p className="text-[#102638] font-medium text-2xl my-8">Join thousands of web3 talents and discusses issues bordering the Web 3 space and make
 some useful contributions to your teammate</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto mb-10">
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Development & IT
            </h1>
            <div className="flex items-center mt-5 relative md:-bottom-8">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Writing & Translation
            </h1>
            <div className="flex items-center mt-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Design & Creative
            </h1>
            <div className="flex items-center mt-5 relative md:-bottom-8">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">AI Services</h1>
            <div className="flex items-center mt-5 relative md:-bottom-8">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Finance & Accounting
            </h1>
            <div className="flex items-center mt-5">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
          {/* item */}
          <div className="bg-white py-5 px-10 rounded">
            <h1 className="text-2xl font-medium text-[#001E00]">
              Development & IT
            </h1>
            <div className="flex items-center mt-5 relative md:-bottom-8">
              <div className="flex items-center justify-center mr-8">
                <AiFillStar className="text-[#14A800]" size={25} />
                <p className="text-[#5E6D55] text-xl">4.8/5</p>
              </div>
              <p className="text-[#5E6D55] text-xl">1853 Skills</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#00360C]">
      <Footer />
      </section>
    </div>
  );
}
