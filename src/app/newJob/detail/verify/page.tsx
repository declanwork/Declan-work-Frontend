"use client"
import Image from "next/image";
import Link from "next/link";
import NavbarJob from "@/app/components/NavbarJob";


export default function EmailVerification() {

  return (
    <div className="overflow-hidden">
    <NavbarJob />
    <section className="py-20 px-3">
      <div className="py-20 px-10 max-w-4xl mx-auto">
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
          <h1 className="text-2xl md:text-3xl font-bold mb-5">Congratulations! Please Verify your Email to submit your job post </h1>
        </div>
      </div>
    </section>
    </div>
  );
}
