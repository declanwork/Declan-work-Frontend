"use client";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { Context } from "@/app/context";

export default function Congratulations() {

  const { freelancer } = useContext(Context)
  return (
    <section className="px-3">
        <Nav />
      <div className="rounded-lg py-20 px-10 max-w-4xl mx-auto">
        <div className="w-full h-[200px] flex justify-center items-center">
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
              className="absolute -bottom-10 -right-32"
            />
          </div>
        </div>
        <div className="text-black text-center mt-20">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            Amazing effort, {freelancer.name} !
          </h1>
          <h1 className="text-xl md:text-4xl font-bold mb-5">
            Your profile is ready.
          </h1>
          <p className="mb-5">
            Congratulations, with thousands of jobs to pick from, it is time for
            you to make your first pick and start your bidding on roles that
            best fit your portfolio
          </p>
          {/* PREV/NEXT BUTTONS */}
          <div className="mt-10 flex justify-between items-center flex-col md:flex-row space-y-5 md:space-y-0 max-w-2xl mx-auto">
            <Link
              href="/profile"
              scroll={false}
              className="border w-full md:w-auto border-[#00EF7C] text-[#001E00] font-medium py-3 px-20 rounded-full"
            >
              View My Profile
            </Link>
            <Link
              href="/Job"
              className="bg-[#00EF7C] w-full md:w-auto text-[#001E00] py-3 px-20 rounded-full border border-[#00EF7C] font-medium"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
