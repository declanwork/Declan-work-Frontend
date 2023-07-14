"use client";
import NavbarJob from "@/app/components/NavbarJob";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical, BsSave } from "react-icons/bs";
import Footer from "../../components/footer";

export default function BlogPost() {
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("/random url");
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
  ]);
  return (
    <div>
      <NavbarJob />
      <div className="max-w-screen-md mx-auto px-3 lg:px-0">
        <h1 className="text-3xl font-medium">
          Non-Technical Web3 Jobs in 2022 — here’s all you need to know
        </h1>
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
          <div className="">
            <p>Vulcan Blockchain &middot; 1 day ago</p>
            <p>5 mins read</p>
          </div>
        </div>
        <div className="flex items-center justify-between border-2 mt-10 py-3 px-4 rounded">
          <BsSave size={20} />
          <div className="flex items-center">
            {!checked ? (
              <AiOutlineHeart size={25} onClick={() => setChecked(true)} />
            ) : (
              <AiFillHeart size={25} onClick={() => setChecked(false)} />
            )}
            <BsThreeDotsVertical size={20} />
          </div>
        </div>

        <div className="md:w-[90%] w-full mx-auto h-80 rounded-lg bg-black overflow-hidden my-5">
          {/* TODO:input image here */}
        </div>
        <div className="mt-10">
          <p className="text-sm md:text-xl leading-relaxed">
            Talk around #Web3 is everywhere! Everyone is excited about how #Web3
            is the future, and we need to gear up towards this exciting
            phenomenon. As per details on Web3.Career, as many as 18,000+ Web3
            jobs are available at 2,300+ Web3 Projects across the globe. The
            numbers are interesting indeed, but there is a lack of clarity among
            people as to what kind of crypto jobs are available and whether
            these web3 jobs require technical skills like coding and
            programming. What people often tend to miss, is that Non-Technical
            jobs in Web3 are available too, and these are equally high-paying
            jobs. Let us take a look at some of the roles that non-technically
            skilled people can take up in the crypto world, which should answer
            all your questions on how to get a job in Web3.{" "}
            <span className="text-[#14A800]">read more...</span>
          </p>
        </div>

        <div className="text-right mt-2">
          <Link href="/" className="text-[#14A800]">
            See More Recommendations...
          </Link>
        </div>

        <div className="flex items-center justify-between mt-10 py-3 px-4 rounded">
          <BsSave size={20} />
          <div className="flex items-center">
            {!checked ? (
              <AiOutlineHeart size={25} onClick={() => setChecked(true)} />
            ) : (
              <AiFillHeart size={25} onClick={() => setChecked(false)} />
            )}
            <BsThreeDotsVertical size={20} />
          </div>
        </div>

        <div className="bg-[#F2F7F2] my-14 py-10 px-4 md:pl-12 rounded-lg">
          <h1 className="text-2xl text-[#14A800] text-center md:text-left mb-2 md:mb-0">
            Your skills are in demand this holiday season
          </h1>
          <div className="flex flex-col-reverse md:flex-row items-center">
            <p className="text-xl text-[#001E00] text-center md:text-left mt-5 md:mt-0">
              End-of-year is a great time to refresh your profile meet new
              clients, and turn your skills into long-term work.
            </p>
            <Image
              alt="not found"
              width={130}
              height={130}
              src="/svg/image.svg"
              className="object-cover block"
            />
          </div>
         <div className="text-center md:text-left mt-5">
         <Link href="/" className="text-[#14A800]">
            Find Work
          </Link>
         </div>
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
      <Footer />
      </section>
    </div>
  );
}
