"use client";
import { SubText } from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";

export default function Payments() {
  const [formData, setFormData] = useState({
    walletName: "",
    walletAddress: "",
  });
 const {walletName, walletAddress } = formData;

 function onChange(e: any) {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
}

  return (
    <div>
      <Nav />
      <div className="max-w-4xl mx-auto">
        <SubText title="Payments for service" subtitle="2/2" />
        <p className="mt-2">
          Client would see this rate on your profile and in search result once
          you publish your profile you can adjust your rate anytime you submit a
          proposal.
        </p>
        <div>
          <div className="border-b py-10">
            <div className="flex justify-between items-start">
              <div className="">
                <label htmlFor="" className="font-medium text-[#102638]">
                  Hourly rate
                </label>
                <p className="text-sm text-[#102638]">
                  Total amount the client will see
                </p>
              </div>
              <div className="relative">
                <AiFillDollarCircle
                  className="text-[#14A800] absolute bottom-2 left-3"
                  size={25}
                />
                <input type="number" name="" id="" className="pl-10 w-[10vw]" />
                <span className="ml-2">/hr</span>
              </div>
            </div>
          </div>
          <div className="border-b py-10">
            <div className="flex justify-between items-start">
              <div className="">
                <label htmlFor="" className="font-medium text-[#102638]">
                  Declan service fee
                </label>
                <p className="text-sm text-[#102638]">
                  This is the percentage fee Declan work will take from you
                </p>
              </div>
              <div className="relative">
                <AiFillDollarCircle
                  className="text-[#14A800] absolute bottom-2 left-3"
                  size={25}
                />
                <input type="number" name="" id="" className="pl-10 w-[10vw]" />
                <span className="ml-2">/hr</span>
              </div>
            </div>
          </div>
          <div className="border-b py-10">
            <div className="flex justify-between items-start">
              <div className="">
                <label htmlFor="" className="font-medium text-[#102638]">
                  Total amount paid
                </label>
                <p className="text-sm text-[#102638]">
                  The estimated amount you will receive after service fee is
                  deducted
                </p>
              </div>
              <div className="relative">
                <AiFillDollarCircle
                  className="text-[#14A800] absolute bottom-2 left-3"
                  size={25}
                />
                <input type="number" name="" id="" className="pl-10 w-[10vw]" />
                <span className="ml-2">/hr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-5xl font-medium mb-5">Upload payment info</h1>
          <p className="text-sm max-w-lg">
            This helps your Job post stand out to the right candidate. It’s the
            first thing they’ll see. So make it count!
          </p>
          <div className="flex items-center justify-start mt-10 space-x-5">
            <div className="flex items-center">
              <input type="radio" name="method" id="" />
              <Image
                src="/images/flow.png"
                width={50}
                height={200}
                alt="flow"
                className="ml-1"
              />
            </div>
            <div className="flex items-center">
              <input type="radio" name="method" id="" />
              <Image
                src="/images/paypal.svg"
                width={30}
                height={200}
                alt="flow"
                className="ml-1"
              />
            </div>
            <div className="flex items-center">
              <input type="radio" name="method" id="" />
              <Image
                src="/images/bank.svg"
                width={30}
                height={200}
                alt="flow"
                className="ml-1"
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="">
              <label htmlFor="">Wallet Name</label>
              <input
                  type="text"
                  id="walletName"
                  value={walletName}
                  onChange={onChange}
                  placeholder="Input Wallet name"
                  className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                />
            </div>
            <div className="mt-5">
              <label htmlFor="walletAddress">Wallet Address</label>
              <input
                  type="text"
                  id="walletAddress"
                  value={walletAddress}
                  onChange={onChange}
                  placeholder="Wallet Address"
                  className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                />
            </div>
          </div>
           {/* PREV/NEXT BUTTONS */}
           <div className="mt-28 flex justify-between items-center">
              <Link href="/editProfile" className="border border-[#001E00] text-[#001E00] font-medium py-3 px-8 rounded-full">Back</Link>
              <Link href="/editProfile/congratulations" className="bg-[#00EF7C] text-[#001E00] py-3 px-8 rounded-full border border-[#00EF7C] font-medium">Get Started</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
