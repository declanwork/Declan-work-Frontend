"use client";
import Image from "next/image";
// import Logo from "../components/logoCloud";
import { FiMail } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { BsBriefcase } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaTrademark } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { NavbarJobFinder } from "../../components/NavbarJob";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="font-poppin">
        <div className="font-poppin h-fit flex flex-col overflow-hidden">
            <NavbarJobFinder />
            <div className="px-14 max-w-4xl mx-auto py-16">
                <h1 className="text-center text-6xl font-bold">Welcome , Imoh!<br /> Let’s start with your first Job post.</h1>
            </div>
        </div>

      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </main>
  );
}
