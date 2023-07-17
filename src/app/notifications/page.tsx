"use client";
import { useState } from "react";
import NavbarJob from "../components/NavbarJob";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";
import Footer from "../components/footer";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      message:
        "A recent sign-in to your Declan Account (5r66r776r) from an unknown device or browser.",
      date: "Jul, 14 2023",
    },
    {
      message:
        "Mr Adeleke  would love to connect with you on your new proposal submitted",
      date: "Jul, 14 2023",
    },
    {
      message:
        "A recent sign-in to your Declan Account (5r66r776r) from an unknown device or browser.",
      date: "Jul, 14 2023",
    },
    {
      message:
        "A recent sign-in to your Declan Account (5r66r776r) from an unknown device or browser.",
      date: "Jul, 14 2023",
    },
    {
      message:
        "A recent sign-in to your Declan Account (5r66r776r) from an unknown device or browser.",
      date: "Jul, 14 2023",
    },
    {
      message:
        "A recent sign-in to your Declan Account (5r66r776r) from an unknown device or browser.",
      date: "Jul, 14 2023",
    },
  ]);

  return (
    <div>
      <NavbarJob />
      <div className="bg-[#14A800] h-[200px] mt-5 rounded-lg max-w-[1100px] mx-auto relative flex items-center justify-between px-20">
        <h1 className="text-4xl text-white ">No New Notifications</h1>
        <div className="h-[250px] w-[250px] -mt-10">
          <Image
            src="/svg/thumbs.svg"
            alt="thumbs-up"
            width={300}
            height={300}
            className=""
          />
        </div>
      </div>
      <div className="border my-10 rounded-lg max-w-screen-lg mx-auto">
        {notifications.map(({ message, date }, index) => (
          <div
            key={index}
            className="flex items-center space-x-8 px-10 py-5 border-b mb-2"
          >
            <BiUserCircle size={50} />
            <div className="">
              <p className="text-[#415361] font-medium text-xl">{message}</p>
              <p className="text-[#415361B2] font-medium text-xl">{date}</p>
            </div>
          </div>
        ))}
        <div className="text-right mb-3 max-w-screen-lg mx-auto px-5">
          <button type="button" className="text-[#00EF7C]">
            Clear all...
          </button>
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
