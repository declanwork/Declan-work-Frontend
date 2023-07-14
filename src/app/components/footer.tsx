import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineLinkedin,
  AiOutlineApple,
  AiOutlineAndroid,
} from "react-icons/ai";
import { FiTwitter, FiYoutube, FiInstagram } from "react-icons/fi";

export default function Footer() {
  const forClient = [
    {
      text: "How to Hire",
      href: "/",
    },
    {
      text: "Talent Marketplace",
      href: "/",
    },
    {
      text: "Project Catalog",
      href: "/",
    },
    {
      text: "Talent Scout",
      href: "/",
    },
    {
      text: "Hire an Agency",
      href: "/",
    },
    {
      text: "Enterprise",
      href: "/",
    },
    {
      text: "Any Hire",
      href: "/",
    },
    {
      text: "Contracts-to-hire",
      href: "/",
    },
    {
      text: "Direct Contracts",
      href: "/",
    },
    {
      text: "Hire Worldwide",
      href: "/",
    },
    {
      text: "Hire in the USA",
      href: "/",
    },
  ];
  const forTalent = [
    {
      text: "How to Find Work",
      href: "/",
    },
    {
      text: "Direct Contracts",
      href: "/",
    },
    {
      text: "Find Freelance Jobs Worldwide",
      href: "/",
    },
    {
      text: "Find Freelance Jobs in the USA",
      href: "/",
    },
  ];
  const resources = [
    {
      text: "Help & Support",
      href: "/",
    },
    {
      text: "Success Stories",
      href: "/",
    },
    {
      text: "Upwork Reviews",
      href: "/",
    },
    {
      text: "Resources",
      href: "/",
    },
    {
      text: "Blog",
      href: "/",
    },
    {
      text: "Community",
      href: "/",
    },
    {
      text: "Affiliate Program",
      href: "/",
    },
    {
      text: "Free Business tools",
      href: "/",
    },
  ];
  const company = [
    {
      text: "About Us",
      href: "/",
    },
    {
      text: "Leadership",
      href: "/",
    },
    {
      text: "Investor Relations",
      href: "/",
    },
    {
      text: "Careers",
      href: "/",
    },
    {
      text: "Our Impact",
      href: "/",
    },
    {
      text: "Press",
      href: "/",
    },
    {
      text: "Contact Us",
      href: "/",
    },
    {
      text: "Trust, Safety & Security",
      href: "/",
    },
    {
      text: "Modern Slavery Statement",
      href: "/",
    },
  ];
  return (
    <div className="px-3 xl:px-0">
      <div className=" max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="text-white">
          <ul>
            <h5 className="mb-3">For Clients</h5>
            {forClient.map((client, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={client.href}>{client.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <ul>
            <h5 className="mb-3 md:mt-0">For Talents</h5>
            {forTalent.map((talent, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={talent.href}>{talent.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <ul>
            <h5 className="mb-3 font-medium md:mt-0 ">Resources</h5>
            {resources.map((resource, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={resource.href}>{resource.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <ul>
            <h5 className="mb-3 sm:mt-0 -mt-40 font-medium">Company</h5>
            {company.map((company, index) => (
              <li key={index} className="text-sm mb-2">
                <Link href={company.href}>{company.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto mt-10 text-white flex flex-col-reverse md:flex-row  justify-between md:items-center border-b pb-5">
        <div className="flex items-center space-x-3 ">
          <h1 className="font-bold">Follow Us</h1>
          <CiFacebook size={30} className="border rounded-full p-1" />
          <AiOutlineLinkedin size={30} className="border rounded-full p-1" />
          <FiTwitter size={30} className="border rounded-full p-1" />
          <FiYoutube size={30} className="border rounded-full p-1" />
          <FiInstagram size={30} className="border rounded-full p-1 " />
        </div>
        <div className="flex items-center space-x-3 mb-5 md:mb-0">
          <h1 className="font-bold">Mobile App</h1>
          <AiOutlineApple size={30} className="border rounded-full p-1" />
          <AiOutlineAndroid size={30} className="border rounded-full p-1" />
        </div>
      </div>
      <div className="text-white max-w-[1100px] mx-auto flex flex-col md:flex-row items-center space-x-10 text-sm pt-5 space-y-5 md:space-y-0">
        <div className="">
          <p>&copy; 2015 - 2023 Declan Works&reg; Global Inc.</p>
        </div>
        <div className="hidden sm:block">
          <ul className="flex space-x-3">
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">CA Notice at Collection</Link>
            </li>
            <li>
              <Link href="/">Accessibility</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
