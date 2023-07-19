"use client";
import NavbarJob from "@/app/components/NavbarJob";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineSearch,
} from "react-icons/ai";
import Footer from "../components/footer";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Job() {
  const [checked, setChecked] = useState(false);
  const [display, setDisplay] = useState([
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
      id: "0",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
    {
      heading: "Interactive app ui/ux design in Figma",
      levelRequired: "Entry Level",
      budget: "$1,500",
      timePosted: "15 mins",
      description:
        "need a UI/UX designer to create a functional interactive ui on figma for an app, I have the step by step breakdown on the key features needed for the app ui, the ui should be very intuitive and fool proof so basically, you'd do the overall user interface, screens, and components for the app based on provided wireframes and guidelines, as well as create visually appealing and engaging",
      skillsRequired: ["Figma", "Prototyping", "Wireframing"],
      paymentMethod: "Cryptocurrency",
      location: "United States",
    },
  ]);
  return (
    <div>
      <NavbarJob />
      <div className="max-w-screen-lg mx-auto px-3 xl:px-0">
        <div className="border rounded-lg mb-10">
          {display.map(
            (
              {
                heading,
                levelRequired,
                budget,
                timePosted,
                description,
                skillsRequired,
                paymentMethod,
                location,
                id,
              },
              index
            ) => (
              <div
                key={index}
                className="px-8 border-b last:border-b-0 py-8 relative mt-3"
              >
                <div className="flex items-center absolute right-5 top-0">
                  {!checked ? (
                    <AiOutlineHeart
                      size={25}
                      data-key={index}
                      onClick={(e: any) => setChecked(true)}
                    />
                  ) : (
                    <AiFillHeart
                      size={25}
                      onClick={(e: any) => setChecked(false)}
                    />
                  )}
                  <BsThreeDotsVertical size={20} />
                </div>
                <h1 className="text-[#415361] text-3xl md:text-5xl">
                  {heading}
                </h1>
                <div className="my-4 flex flex-col md:flex-row md:items-center md:space-x-4">
                  <p className="text-sm text-[#777777]">
                    Level Required: {levelRequired}
                  </p>
                  <p className="text-sm text-[#777777]">
                    Est. budget: {budget}
                  </p>
                  <p className="text-sm text-[#777777]">
                    Posted {timePosted} ago
                  </p>
                </div>
                <p className="text-sm md:text-base">{description}</p>
                <div className="flex items-center flex-wrap gap-2 md:gap-0 md:space-x-4 my-4">
                  {" "}
                  <p className="text-sm text-[#777777]">Skills Required:</p>
                  {skillsRequired.map((skills) => (
                    <div
                      key={skills}
                      className="bg-[#9AA3AA80] py-2 px-4 rounded-full"
                    >
                      <p className="text-sm text-[#102638]">{skills}</p>
                    </div>
                  ))}
                </div>
                <div className="flex md:items-center flex-col md:flex-row space-y-5 md:space-y-0 justify-between">
                  <div className="flex md:items-center flex-col md:flex-row md:space-x-2">
                    <p className="text-sm text-[#777777]">
                      Payment Method: {paymentMethod}
                    </p>
                    <p className="text-sm text-[#777777]">
                      Location: {location}
                    </p>
                  </div>
                  <button className="bg-[#00EF7C] py-3 px-4 rounded-full text-sm text-[#00360C]">
                    Apply
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
// export default function Job(){
//     return <div>
//         <div className="px-8 py-10 border rounded-lg max-w-screen-md mx-auto mt-20">
//           <h1 className="text-2xl text-[#102638] mb-8">Additional Details</h1>
//           <h1>Cover Letter</h1>
//           <div className="mt-16 mb-5">
//             <label htmlFor="resume" className="">
//               Portfolio Link (Hosted CV/resume on Google Drive preferrably)
//             </label>
//             <input
//               type="text"
//               id="portfolioLink"
//               value=""
//             //   onChange={}
//               className="block w-[90%] mt-3 md:w-[31.5vw]"
//             />
//           </div>
//           <button
//             type="button"
//             onClick={() => {
//               console.log("Sent")
//             }}
//             className="py-4 w-[90%] md:w-[31.5vw] px-[118px] rounded font-medium bg-[#00EF7C]"
//           >
//             Submit
//           </button>
//         </div>
//     </div>
// }


