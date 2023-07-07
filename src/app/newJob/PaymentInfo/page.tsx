"use client";
import { SetStateAction, useState } from 'react'
import Image from 'next/image';
import Link from "next/link";
import Header from "@/components/Header";
import NavbarJob from "@/components/NavbarJob";



export default function Payments() {
  const [topping, setTopping] = useState("paypal")

  const onOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTopping(e.target.value)
  }

  return (
    <div>
      <NavbarJob />
      <div className="max-w-3xl mx-auto py-16">
        <Header 
          title="Post new Job" 
          subtitle="3/3" 
          nextTitle="Upload payment info" 
          nextSubtitle="This helps your Job post stand out to the right candidate. 
          It’s the first thing they’ll see. So make it count!"
        />
        {/* RADIO BUTTONS */}
        <div className="flex justify-between w-[60%] px-3">
          <div className="space-x-3 flex justify-center items-center">
            <input
              type="radio"
              name="topping"
              value="flow"
              id="flow"
              checked={topping === "flow"}
              onChange={onOptionChange}
            />
            <label htmlFor="flow">
              <Image
                className="hidden h-8 w-auto lg:block"
                src="/images/flow.png"
                alt="flow"
                width={178}
                height={68}
              />
            </label>
          </div>
          
          <div className="space-x-3 flex justify-center items-center">
            <input
              type="radio"
              name="topping"
              value="paypal"
              id="paypal"
              checked={topping === "paypal"}
              onChange={onOptionChange}
            />
            <label htmlFor="paypal">
              <Image
                className="hidden h-8 w-auto lg:block"
                src="/images/paypal.svg"
                alt="paypal"
                width={178}
                height={68}
              />
            </label>
          </div>

          <div className="space-x-3 flex justify-center items-center">
            <input
              type="radio"
              name="topping"
              value="bank"
              id="bank"
              checked={topping === "bank"}
              onChange={onOptionChange}
            />
            <label htmlFor="bank" className="flex justify-center items-center">
              <Image
                className="hidden h-8 w-auto lg:block"
                src="/images/bank.svg"
                alt="bank"
                width={178}
                height={68}
              />
              Bank Card
            </label>
          </div>

        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Wallet Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Input Wallet Name"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Wallet Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Wallet Address"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

        </div>

        <div className="mt-9 flex items-center justify-between gap-x-6">
        <Link href="/newJob/Content" className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900">
          Back
        </Link>
        <Link
          href="/newJob/detail"
          className="rounded-full bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
        >
          Next Skill
        </Link>
      </div>
      </div>
    </div>
  );
}
