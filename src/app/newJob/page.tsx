"use client";
import { useRouter } from "next/navigation";
import Header, { SubText } from "../components/Header";
import NavbarJob from "../components/NavbarJob";
import Link from "next/link";
import { BiSolidPencil } from 'react-icons/bi';
import { PiCaretDownBold } from 'react-icons/pi';
import { useState, useEffect } from "react";
import Form from "../components/Form";
import { CreateGig } from "@/app/flow/transaction";
import Image from "next/image";
import * as fcl from "@onflow/fcl";
import "../flow/config";

export default function NewJob() {
  const [noOfFreelancers, setNoOfFreelancers] = useState(9); //queryblockchain
  const [user, setUser] = useState("Nobody")
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [page, setPage] = useState("page-1");
  const [formData, setFormData] = useState({
    email: "",
    jobTitle: "",
    jobType: "",
    jobValue: "",
    jobLocation: "",
    priceType: "",
    jobDuration: "",
    taskCategories: "",
    requiredSkills: "",
    description: "",
    companyName: "",
    walletName: "",
    walletAddress: "",
    hourlyRate: "",
  });
  const {
    email,
    jobTitle,
    jobType,
    jobValue,
    jobLocation,
    priceType,
    jobDuration,
    taskCategories,
    requiredSkills,
    description,
    walletName,
    walletAddress,
    companyName,
  } = formData;

  // const sendQuery =async () => {
  //   const numberData = await fcl.query({
  //     cadence: `
  //      import DeclanWork from OxDeclanWork

  //      pub fun main(address: Address) : UInt64 {
  //       return DeclanWork.noOfFreelancers
  //      }
  //     `,
  //     args: (arg, t) => [arg("0xdad30ac7c5da7014", t.Address)],
  //   })
    
  //   setNoOfFreelancers(numberData)
    
  // }

  const handleGig = async () => {
    var txId = await CreateGig(formData.jobTitle, formData.description, formData.jobValue, formData.jobDuration, "Not fixed", false , "open", false, 0.0)
    await fcl.tx(txId).onceSealed();
    router.push("/newJob/detail/verify");
  }
 
    
  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    
    console.log("formData", formData)
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <div>
      <NavbarJob />
      {page === "page-1" && (
        <div className="md:px-14 px-10 max-w-2xl min-w-[300px] mx-auto py-16">
          <Header
            title="Post new Job"
            subtitle="1/3"
            nextTitle="Let’s Start with a strong Title."
            nextSubtitle="This helps your Job post stand out to the right candidate. 
                    It’s the first thing they’ll see. So make it count!"
          />
          <div className="my-9">
            {/* <span>{noOfFreelancers}</span>
            <button onClick={sendQuery}>Send Query</button> */}
            <p className="font-semibold mb-3">
              Write a title for your Job Post
            </p>
            <textarea
              name="jobTitle"
              id="jobTitle"
              value={jobTitle}
              onChange={onChange}
              rows={6}
              // cols={30}
              className="px-4 min-h-[auto] w-full py-4 bg-white text-lg text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out resize-none"
            />
            <p className="font-medium text-sm text-[#00EF8B] my-3">
              We’ll match you with candidates that specialize in Web3 Design{" "}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPage("page-2");
              window.scroll(0, 0);
            }}
            className="rounded-full float-right text-sm font-semibold bg-[#00EF7C] p-2 px-5 text-[#00360C]  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#ADFFC8]"
          >
            Next
          </button>
        </div>
      )}
      {page === "page-2" && (
        <div className="px-14 max-w-3xl mx-auto py-16">
          <SubText title="Post new Job" subtitle="2/3" />
          {/* Input Fields */}
          <div className="my-5 bg-[#00EF7C] p-3 rounded-lg w-full">
            <p className="text-[#001E00] text-sm">
              Filling out as many fields as possible increases your chances of
              finding the right candidate. Use this form only if you are looking
              to hire.
            </p>
          </div>
          {/* <Form  /> */}
          <form>
            <div className="space-y-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="jobType"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="jobType"
                      value={jobType}
                      onChange={onChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    >
                      <option value="One-time">One-time</option>
                      <option value="Full-time">Full-time</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="jobLocation"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <select
                      id="jobLocation"
                      value={jobLocation}
                      onChange={onChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    >
                      <option value="Remote">Remote</option>
                      <option value="On Site">On Site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="jobValue"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Budget(per hour)
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="jobValue"
                      value={jobValue}
                      onChange={onChange}
                      placeholder="0.00 FLOW"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="priceType"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price Type
                  </label>
                  <div className="mt-2">
                    <select
                      id="priceType"
                      value={priceType}
                      onChange={onChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    >
                      <option value="Remote">Remote</option>
                      <option value="On Site">On Site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="jobDuration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Duration
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      id="jobDuration"
                      value={jobDuration}
                      onChange={onChange}
                      placeholder="Job Duration In Days"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="taskCategories"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Task Categories
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="taskCategories"
                      value={taskCategories}
                      onChange={onChange}
                      placeholder="Smart Contract Development, Frontend Development, etc"
                      autoComplete="taskCategories"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="requiredSkills"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Required Skills
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="requiredSkills"
                      value={requiredSkills}
                      onChange={onChange}
                      placeholder="React, Cadence, Rust , Solidity, etc"
                      autoComplete="requiredSkills"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    name="jobTitle"
                    id="description"
                    value={description}
                    onChange={onChange}
                    placeholder="Company Introduction, Job Description, Responsibilities, Skills, etc"
                    rows={6}
                    cols={50}
                    className="px-4 py-4 bg-white text-lg text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out resize-none w-full"
                  />
                  {/* <ReactQuill
                theme="snow"
                id="description"
                value={description}
                onChange={handleProcedureContentChange}
                className="h-[300px]"
              /> */}
                  {/* <p className="text-sm text-black font-extralight w-full -mt-6 col-span-full">(min 150 max 5000 now 0)</p> */}
                </div>
                <div className="mt-5 col-span-full">
                  <label>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}
                      className="px-2 py-2 bg-white text-xl text-[#00EF7C] border border-[#00EF7C] rounded transition ease-in-out mr-3"
                    />
                    <span className="text-sm text-black">
                      Require resume from freelancer on application
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">
                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your email address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                      placeholder="Your email address"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Your/Company name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="companyName"
                      value={companyName}
                      onChange={onChange}
                      placeholder="Your/Company name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About You
                  </label>
                  {/* <ReactQuill
                theme="snow"
                id="about"
                value={about}
                onChange={handleProcedureContentChange}
                className="h-[300px]"
              /> */}
                  {/* <div className="mt-5">
                <p className="text-sm text-black font-extralight w-full">(min 150 max 5000 now 0)</p>
              </div> */}
                </div>
              </div>
            </div>
          </form>
          {/*  */}
          <div className="mt-9 flex items-center justify-between gap-x-6">
            <button
              type="button"
              onClick={() => {
                setPage("page-1");
                window.scroll(0, 0);
              }}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                setPage("page-3");
                window.scroll(0, 0);
              }}
              className="rounded-full bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {page === "page-3" && (
        <div className="px-14 max-w-3xl mx-auto py-16">
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
                checked
                disabled
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
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">
            <div className="col-span-full">
              <label
                htmlFor="walletName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Wallet Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="walletName"
                  id="walletName"
                  value={walletName}
                  onChange={onChange}
                  placeholder="Input Wallet Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="walletAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Wallet Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="walletAddress"
                  id="walletAddress"
                  value={walletAddress}
                  onChange={onChange}
                  placeholder="Wallet Address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-9 flex items-center justify-between gap-x-6">
            <button
              type="button"
              onClick={() => {
                setPage("page-2");
                window.scroll(0, 0);
              }}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => {
                setPage("page-4");
                window.scroll(0, 0);
              }}
              className="rounded-full bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
            >
              Confirm Job Details
            </button>
          </div>
        </div>
      )}
      {page === "page-4" && (
        <div className="px-10 max-w-3xl mx-auto py-16">
        <div className="flex justify-between">
            <SubText 
            title="Job Detail" 
            subtitle="3/3"
            />
            <Link
                href="/newJob/detail/verify"
                className="rounded-full bg-[#00EF7C] px-4 py-2 h-9 text-sm font-semibold shadow-sm"
            >
            Post This Job
            </Link>
        </div>
        <div className="border border-[#D9D9D9] mt-10 h-fit rounded-xl">
            <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                <p className="w-[85%] font-semibold">{formData.jobTitle}</p>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                <p className="w-[85%]">
                    {formData.description} <br />
                </p>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between">
                <div className="w-[85%] ">
                    <h1 className="font-bold">Job Duration</h1>
                    <p className="text-sm">{formData.jobDuration}</p>
                </div>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between">
                <div className="w-[70%]">
                    <h1 className="font-bold">Skills</h1>
                    <div className="flex justify-between text-sm">
                        <span className="bg-[#00EF7C] rounded-full p-2">Web3 Design</span>
                        <span className="bg-[#00EF7C] rounded-full p-2">Web3 Development</span>
                        <span className="bg-[#00EF7C] rounded-full p-2">Product Design</span>
                        <span className="bg-[#00EF7C] rounded-full p-2">UI/UX Design</span>
                    </div>
                </div>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between">
                <div className="w-[85%] ">
                    <h1 className="font-bold">Scope</h1>
                    <p className="text-sm">Medium, More than 6 months Intermediate Level</p>
                </div>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between border-b border-[#D9D9D9]">
                <div className="w-[85%] ">
                    <h1 className="font-bold">Budget</h1>
                    <p className="text-sm">{formData.jobValue} Flow/ hr</p>
                </div>
                <div className="text-[#00EF7C] w-10 h-10 rounded-full flex justify-center items-center border border-[#E0E0E0]"><BiSolidPencil /></div>
            </div>

            <div className="p-5 px-6 flex items-center justify-between">
                <div className="w-[85%] ">
                    <h1 className="font-bold">Screening Questions (Optional)</h1>
                    <p className="text-sm">Narrow down your candidate</p>
                </div>
                <div className="text-[#878787]"><PiCaretDownBold /></div>
            </div>
        </div>
    

    

        <div className="mt-9 flex items-center justify-between gap-x-6">
            {/* <Link href="/newJob/Title" className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900">
            Back
            </Link> */}
            <button
              type="button"
              onClick={() => {
                setPage("page-3");
                window.scroll(0, 0);
              }}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-[#001E00] leading-6 text-gray-900"
            >
              Back
            </button>
            <div className="flex items-center space-x-3">
                <Link href="#">Save as draft</Link>
                <button className="rounded-full bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
                    onClick={() => {
                      handleGig();
                    }}>
                  Post This Job
                </button>
                {/* <Link
                    href="/newJob/detail/verify"
                    
                >
                
                </Link> */}
            </div>
        </div>
  </div>
      )}
    </div>
  );
}
