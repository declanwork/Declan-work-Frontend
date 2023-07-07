"use client";
import { SubText } from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Image from "next/image";
import { AiFillDollarCircle } from "react-icons/ai";

export default function payments() {
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
                <AiFillDollarCircle className="text-[#14A800] absolute bottom-2 left-3" size={25}/>
                <input type="number" name="" id="" className="pl-10 w-[10vw]" /><span className="ml-2">/hr</span>
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
                <AiFillDollarCircle className="text-[#14A800] absolute bottom-2 left-3" size={25}/>
                <input type="number" name="" id="" className="pl-10 w-[10vw]" /><span className="ml-2">/hr</span>
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
                <AiFillDollarCircle className="text-[#14A800] absolute bottom-2 left-3" size={25}/>
                <input type="number" name="" id="" className="pl-10 w-[10vw]" /><span className="ml-2">/hr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
            <h1 className="text-5xl font-medium mb-5">Upload payment info</h1>
            <p className="text-sm max-w-lg">This helps your Job post stand out to the right candidate. It’s the first thing they’ll see. So make it count!</p>
            <div className="">
              <div className="">
                <input type="radio" name="method" id="" />
                <Image src="/images/flog.png" width={200} height={200} alt="flow" />
              </div>
              <div className="">
              <input type="radio" name="method" id="" />
              </div>
              <div className="">
              <input type="radio" name="method" id="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
