"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function EmailVerification() {
  function resendEmail() {}

  return (
    <section className="pb-20 px-3">
        <Nav />
      <div className="border border-[#001E005E] rounded-lg py-20 px-10 max-w-4xl mx-auto">
        <div className="w-full h-[200px] flex justify-center items-center">
          <div className="relative">
            <Image
              src="/svg/clipgroup.svg"
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
            Amazing effort, Morgan!
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
          <div className="mt-10 flex justify-between items-center max-w-2xl mx-auto">
            <Link
              href=""
              scroll={false}
              className="border border-[#00EF7C] text-[#001E00] font-medium py-3 px-20 rounded-full"
            >
              View My Profile
            </Link>
            <Link
              href="/editProfile/payments"
              className="bg-[#00EF7C] text-[#001E00] py-3 px-20 rounded-full border border-[#00EF7C] font-medium"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
