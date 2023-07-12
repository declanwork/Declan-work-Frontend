"use client";
import Image from "next/image";
import NavbarJob from "../components/NavbarJob";

export default function Community() {
  return (
    <div>
      <NavbarJob />
      <div className="max-w-screen-lg mx-auto text-white bg-[#14A800] h-[180px] flex justify-center items-center rounded-lg px-8 gap-2">
        <h1 className="w-[80%] mx-auto text-2xl">
          Join thousands of web3 talents and discusses issues bordering the Web
          3 space and make some useful contributions to your teammate
        </h1>
        <div className="flex-1">
          <Image src="/images/company.png" alt="svg" width={250} height={132} />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mt-5 text-[#102638]">
        <h1 className="text-3xl font-bold">Community</h1>
        <h1 className="mt-10 text-3xl">Community Chats</h1>
      </div>
    </div>
  );
}
