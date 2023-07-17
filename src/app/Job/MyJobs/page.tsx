"use client";
import Navbar from "@/app/components/Navbar";
import jobsIcon from "../../../../public/images/jobs-icon.png";
import Image from "next/image";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function MyJobs() {
return<>
<Navbar />

<div
     className="flex items-center justify-center p-4 mt-16 md:w-3/5 mx-auto text-center">
      <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold leading-relaxed text-darkGreen">
          Welcome Imoh! <br /> Let&apos;s start with yout first job post.
        </h1>
        <p className="my-4">
          It&apos;s the fastest way to meet to p talent get help from AI and
          done in no time
        </p>

        <Link href="/newJob" className="text-black no-underline">
        <button className="bg-lightGreen text-darkGreen mt-4 text-center w-10/12 md:w-2/5 py-2 rounded-full text-sm md:text-base font-normal">
          Post your first job
        </button>
        </Link>
        <Image
          src={jobsIcon}
          alt="Picture for jobs"
         width={300}
         height={300}
         className="mx-auto my-10"
        />
      </div>
    </div>

<section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
</>


}