"use client"
import Image from "next/image";
import Link from "next/link";

export default function EmailVerification() {
    function resendEmail(){}

  return (
    <section className="py-20 px-3">
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
            <h1 className="text-2xl md:text-4xl font-bold mb-5">Verify your email to proceed</h1>
            <p className="mb-5">We just sent an email to Ericmorgan@gmail.com</p>
            <p className="mb-5">Please check on the email and click the link provided to verify your email</p>
            <Link href="#" className="text-sm text-[#14A800] block mb-5">Change email</Link>
            <Link href="#" className="text-sm text-[#14A800] block">I need help verifying my email</Link>
            <button
            onClick={resendEmail}
            className="mt-10 flex items-center justify-center w-full bg-[#00EF7C] text-[#001E00] px-7 py-3 uppercase text-sm font-medium  hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
          >
            {" "}
            Resend Verfification Email
          </button>
        </div>
      </div>
    </section>
  );
}
