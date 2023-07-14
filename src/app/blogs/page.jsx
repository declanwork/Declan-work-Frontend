"use client";
import NavbarJob from "@/app/components/NavbarJob";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart, AiOutlineCompass } from "react-icons/ai";
import Footer from "../components/footer";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";

export default function Blogs() {
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("/random url");
  const [blogsNav, setBlogsNav] = useState("General");
  // const [nav, setNav] = useState("General");
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

  return (
    <div>
      <NavbarJob />
      <div className="px-3 xl:px-0">
      <div className="max-w-screen-lg mx-auto text-white bg-[#14A800] h-[180px] flex justify-center items-center rounded-lg px-8 gap-2">
        <h1 className="md:w-[80%] w-full mx-auto text-2xl">
          Join thousands of web3 talents and read on issues bordering the Web 3
          space and make some useful contributions to the space
        </h1>
        <div className="flex-1 hidden lg:block">
          <Image
            src="/images/browser-window.png"
            alt="svg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="mt-8">
        <ul className="flex items-center justify-center flex-wrap gap-3">
          <li className="border py-3 px-4 rounded-full flex items-center"><AiOutlineCompass size={25} className="mr-2" />Explore Topics</li>
          <li className="border py-3 px-4 rounded-full">Technology</li>
          <li className="border py-3 px-4 rounded-full">Cryptocurrency</li>
          <li className="border py-3 px-4 rounded-full">Content Writing</li>
          <li className="border py-3 px-4 rounded-full">Coding</li>
          <li className="border py-3 px-4 rounded-full">Blockchain</li>
        </ul>
      </div>
      <div className="pt-4 rounded-lg border border-[#CCD1D5] w-full mt-8 mb-5 max-w-screen-lg mx-auto">
        <div className="border-b-2 px-4 md:px-20">
          <h1 className="text-3xl font-medium mb-2">Blog Posts</h1>
          {/* BUTTON SECTION START */}
          <div className="flex items-center space-x-10 pt-4">
            <button
              onClick={() => {
                setBlogsNav("Blog Profile");
              }}
              className={`${
                blogsNav === "Blog Profile"
                  ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded"
                  : "pb-4"
              }`}
            >
              Blog Profile
            </button>
            <button
              onClick={() => {
                setBlogsNav("General");
              }}
              className={`${
                blogsNav === "General"
                  ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded"
                  : "pb-4"
              }`}
            >
              General
            </button>
            <button
              onClick={() => {
                setBlogsNav("Saved Blogs");
              }}
              className={`${
                blogsNav === "Saved Blogs"
                  ? "font-medium border-b-4 border-black pb-4 -mb-[3px] rounded"
                  : "pb-4"
              }`}
            >
              Saved Blogs
            </button>
          </div>
          {/* BUTTON SECTION END */}
        </div>
        {/* Blog posts */}
        {blogsNav === "General" && blogPosts.length > 0 && (
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
                <div key={index} className="px-4 md:px-20 py-4 relative border-b">
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
                  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                    <div className="flex-1">
                      <h1 className="text-xl text-[#102638] font-medium">
                        {blogHeading}
                      </h1>
                      <p className="text-sm mt-5">{blogPost}</p>
                    </div>
                    <div className="md:w-48 w-full h-48 bg-black overflow-hidden mb-5">
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
      <div className="text-right mb-10 max-w-screen-lg mx-auto">
        <Link href="/" className="text-[#00EF7C]">
          View More...
        </Link>
      </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
