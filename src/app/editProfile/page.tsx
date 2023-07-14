"use client";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { createFreelancerAccount } from "@/app/flow/transactions";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import "react-phone-number-input/style.css";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import { AiOutlineSearch, AiFillDollarCircle } from "react-icons/ai";
import { FaUpload, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NavbarJob from "../components/NavbarJob";
import { countries, jobCategories, jobRoles } from "@/constants";
import { SubText } from "../components/Header";
import * as fcl from "@onflow/fcl";
import "../flow/config";

import { Context } from "../context";


import { toast } from 'react-toastify';

export default function Profile() {
  const { user} = useContext(Context)
  console.log(user)
  const [transactionStatus, setTransactionStatus] = useState(0)
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [next, setNext] = useState("page-1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobRole: "",
    jobCategory: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    bio: "",
    walletName: "",
    walletAddress: "",
    hourlyRate: "",
    serviceFee: "",
    amountPaid: "",
    portfolioLink: "",
  });
  const {
    name,
    email,
    jobRole,
    jobCategory,
    city,
    country,
    address,
    postalCode,
    phoneNumber,
    bio,
    walletName,
    walletAddress,
    hourlyRate,
    serviceFee,
    amountPaid,
    portfolioLink,
  } = formData;

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(user)
    console.log("formData", formData)
  }

  const createFreelancer = async () => {
    try {
      const txId = await createFreelancerAccount(formData.name,formData.walletAddress,formData.portfolioLink, formData.jobRole, formData.jobCategory,  false, 0, formData.email, formData.country, 0);
      toast('User authenticated', { hideProgressBar: true, autoClose: 2000, type: 'success' });
  
      fcl.tx(txId).subscribe(res => setTransactionStatus(res.status));
      try {
        if (transactionStatus === 0) {
          toast('Transaction status loading', { hideProgressBar: true, autoClose: 2000, type: 'info' });
        } else if (transactionStatus === 1) {
          toast('Transaction pending - Awaiting Finalization', { hideProgressBar: true, autoClose: 2000, type: 'info' });
        } else if (transactionStatus === 2) {
          toast('Transaction finalized - Awaiting Execution', { hideProgressBar: true, autoClose: 2000, type: 'info' });
        } else if (transactionStatus === 3) {
          toast('Transaction executed - Awaiting Sealing', { hideProgressBar: true, autoClose: 2000, type: 'success' });
        } else if (transactionStatus === 4) {
          toast('Transaction Sealed - Transaction Complete!', { hideProgressBar: true, autoClose: 2000, type: 'success' });
          setNext("page-4");
          window.scroll(0, 0);
        } else if (transactionStatus === 5) {
          toast('Transaction Expired', { hideProgressBar: true, autoClose: 2000, type: 'error' });
        } else {
          toast('Transaction status unknown', { hideProgressBar: true, autoClose: 2000, type: 'info' });
        }
        
        await fcl.tx(txId).onceSealed();
        setNext("page-4");
        window.scroll(0, 0);
      } catch (error) {
        toast('Failed to create freelancer profile', { hideProgressBar: true, autoClose: 2000, type: 'error' });
        console.error(error);

      }
    } catch (error) {
      toast('Failed to create freelancer profile', { hideProgressBar: true, autoClose: 2000, type: 'error' });
      console.error(error);
    }
  };
  
  // function onSubmit(){
  //   // Function for submitting form fields
  //   router.push("/editProfile/congratulations")
  // }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // function handleProcedureContentChange(
  //   content: any,
  //   delta: any,
  //   source: any,
  //   editor: any
  // ) {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     bio: content,
  //   }));
  // }

  return (
    <>
      <NavbarJob />
      {next === "page-1" && (
        <div className="max-w-5xl min-w-[300px] md:ml-20 mt-1 md:mt-10 mx-auto px-5 md:px-10 py-12">
          <h1 className="text-5xl font-medium text-black mb-5">
            Land your dream job
          </h1>
          <h1 className="text-4xl font-medium text-black max-w-2xl mb-4">
            What would you like to tell the world about yourself?
          </h1>
          <p className="font-medium text-black">
            We need to know about your experience, your skills, portfolio and
            certification.
          </p>
          <div className="mt-16 mb-5">
            <label htmlFor="resume" className="">
              Portfolio Link (Hosted CV/resume on Google Drive preferrably)
              {/* <div className="flex items-center border rounded border-[#001E00] justify-start w-[30vw] p-3">
                <div className="mx-auto flex items-center">
                <FaUpload className="text-[#00EF7C] bg-black p-2 rounded-full" size={30} /> <span className="ml-2 font-medium">Upload Your Resume</span>
                </div>
              </div> */}
            </label>
            <input
              type="text"
              id="portfolioLink"
              value={portfolioLink}
              onChange={onChange}
              className="block w-[90%] mt-3 md:w-[31.5vw]"
            />
            {/* <input type="file" name="" id="resume" className="hidden mx-auto" /> */}
          </div>
          {/* <div className="mb-7">
            <label htmlFor="resume" className="text-center">
              <div className="flex items-center border rounded border-[#001E00] justify-start w-[30vw] p-3">
                <div className="mx-auto flex items-center">
                <FaLinkedinIn className="text-[#00EF7C]" size={20} /> <span className="ml-2 font-medium">Import From Linkedin</span>
                </div>
              </div>
            </label>
              <input type="file" name="" id="resume" className="hidden mx-auto" />
          </div> */}
          <button
            type="button"
            onClick={() => {
              setNext("page-2");
              window.scroll(0, 0);
            }}
            className="py-4 w-[90%] md:w-[31.5vw] px-[118px] rounded font-medium bg-[#00EF7C]"
          >
            Submit
          </button>
        </div>
      )}
      {next === "page-2" && (
        <div className="max-w-4xl mx-auto px-3 md:px-3">
          <SubText title="Let's Get Started " subtitle="1/2" />
          <div className="bg-[#00EF7C] p-2 rounded-lg text-center mt-2">
            <p className="text-[#001E00] text-sm">
              Filling out as many fields as possible increases your chances of
              finding the right job. Use this form only if you are looking to
              get employed.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            {/* Profile Picture Section */}
            <div className="md:border-r w-full lg:w-60 text-center">
              {!selectedImage ? (
                <div>
                  <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden">
                    <Image
                      alt="not found"
                      width={1200}
                      height={800}
                      src="/svg/profile.svg"
                      className="object-cover block"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mx-auto w-56 h-56 rounded-full bg-black flex overflow-hidden">
                    <Image
                      alt="not found"
                      width={1200}
                      height={800}
                      src={URL.createObjectURL(selectedImage)}
                      className="object-cover block"
                    />
                  </div>
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}
              <br />
              <br />
              <div className="text-center mb-10">
                <label
                  htmlFor="files"
                  className="py-3 border border-[#00EF7C] text-[#00EF7C] px-8 rounded-lg"
                >
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="files"
                  name="myImage"
                  className="hidden"
                  onChange={(event: any) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            {/* Personal Info section */}
            <div className="lg:-ml-48 pb-10">
              {/* Row 0 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="">
                  <label htmlFor="name" className="text-[#0D0D22]">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={onChange}
                      placeholder="Full name or Nickname"
                      className="block w-full py-3 pr-4 pl-9 bg-transparent border border-[#D0D2D6] text-sm"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="email" className="text-[#0D0D22]">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email address"
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
              </div>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="jobRole" className="text-[#0D0D22]">
                    Job Title
                  </label>
                  <select
                    id="jobRole"
                    value={jobRole}
                    onChange={onChange}
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  >
                    <option value="" disabled selected>
                      Select a job title
                    </option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="jobCategory" className="text-[#0D0D22]">
                    Job Category
                  </label>
                  <select
                    id="jobCategory"
                    value={jobCategory}
                    onChange={onChange}
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  >
                    <option
                      value=""
                      className="text-[#a0a6b2]"
                      disabled
                      selected
                    >
                      Select a category
                    </option>
                    {jobCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div className="">
                  <label htmlFor="country" className="text-[#0D0D22]">
                    Country
                  </label>
                  <select
                    id="country"
                    value={country}
                    onChange={onChange}
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  >
                    <option
                      value=""
                      className="text-[#a0a6b2]"
                      disabled
                      selected
                    >
                      Select your country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label htmlFor="city" className="text-[#0D0D22]">
                    City (Optional)
                  </label>
                  <div className="relative">
                    <AiOutlineSearch
                      className="absolute bottom-3 left-2"
                      size={20}
                    />
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={onChange}
                      className="block w-full py-3 pr-4 pl-9 bg-transparent border border-[#D0D2D6] text-sm"
                    />
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div className="">
                  <label htmlFor="address" className="text-[#0D0D22]">
                    Street Address (Optional)
                  </label>
                  <div className="relative">
                    <AiOutlineSearch
                      className="absolute bottom-3 left-2"
                      size={20}
                    />
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={onChange}
                      placeholder="Enter Street Address"
                      className="block w-full py-3 pr-4 pl-9 bg-transparent border border-[#D0D2D6] text-sm"
                    />
                  </div>
                </div>
                <div className="">
                  <label htmlFor="postalCode" className="text-[#0D0D22]">
                    Zip Postal Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    onChange={onChange}
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
              </div>
              {/* Row 4 - fix phone number fetching */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <div className="">
                  <label htmlFor="phoneNumber" className="text-[#0D0D22]">
                    Phone Number
                  </label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                    defaultCountry="NG"
                    className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
              </div> */}
              {/* Text Editor */}
              <div className="mt-10">
                <label htmlFor="bio" className="text-[#0D0D22]">
                  Bio
                </label>
                <textarea
                  name="Bio"
                  id="bio"
                  value={bio}
                  onChange={onChange}
                  rows={6}
                  placeholder=" Tell us why we should hire you and not the next guy."
                  // cols={30}
                  className="px-4 min-h-[auto] w-full py-4 bg-white text-lg text-gray-700 border border-[#D9D9D9] rounded transition ease-in-out resize-none"
                />
                {/* <ReactQuill
                theme="snow"
                id="bio"
                value={bio}
                onChange={handleProcedureContentChange}
                className="h-[300px]"
              /> */}
              </div>
              
              {/* <div className="mt-20">
                <label htmlFor="portfolio">Upload your portfolio</label>
                <input type="file" name="" id="portfolio" className="hidden" />
                <label htmlFor="portfolio">
                  <div className="flex items-center border border-[#CCD1D5] justify-start md:w-[25vw] w-full text-sm p-3">
                    <FaUpload />{" "}
                    <span className="ml-2">
                      Use a PDF, Doc, Docx, Rtf, and Txt
                    </span>
                  </div>
                </label>
              </div> */}
              {/* PREV/NEXT BUTTONS */}
              <div className="mt-10 space-y-5 md:space-y-0 flex justify-between items-center flex-col md:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    setNext("page-1");
                  }}
                  className="border w-full md:w-auto border-[#001E00] text-[#001E00] font-medium py-3 px-8 rounded-full"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="bg-[#00EF7C] w-full md:w-auto text-[#001E00] py-3 px-8 rounded-full border border-[#00EF7C] font-medium"
                  onClick={() => {
                    setNext("page-3");
                    window.scroll(0, 0);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Payment options */}
      {next === "page-3" && (
        <div className="max-w-4xl mx-auto px-3 lg:px-0">
          <SubText title="Payments for service" subtitle="2/2" />
          <p className="mt-2">
            Client would see this rate on your profile and in search result once
            you publish your profile you can adjust your rate anytime you submit
            a proposal.
          </p>
          <div>
            <div className="border-b py-10">
              <div className="flex justify-between items-start flex-col md:flex-row space-y-5 md:space-y-0">
                <div className="">
                  <label
                    htmlFor="hourlyRate"
                    className="font-medium text-[#102638]"
                  >
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
                  <input
                    type="number"
                    id="hourlyRate"
                    value={hourlyRate}
                    onChange={onChange}
                    className="pl-10 md:w-[20vw] lg:w-[10vw]"
                    step="0.01"
                  />
                  <span className="ml-2">/hr</span>
                </div>
              </div>
            </div>
            <div className="border-b py-10">
              <div className="flex justify-between items-start flex-col md:flex-row space-y-5 md:space-y-0">
                <div className="">
                  <label
                    htmlFor="serviceFee"
                    className="font-medium text-[#102638]"
                  >
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
                  <input
                    type="number"
                    id="serviceFee"
                    value={serviceFee}
                    onChange={onChange}
                    className="pl-10 md:w-[20vw] lg:w-[10vw]"
                    step="0.1"
                  />
                  <span className="ml-2">/hr</span>
                </div>
              </div>
            </div>
            <div className="border-b py-10">
              <div className="flex justify-between items-start flex-col md:flex-row space-y-5 md:space-y-0">
                <div className="">
                  <label
                    htmlFor="amountPaid"
                    className="font-medium text-[#102638]"
                  >
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
                  <input
                    type="number"
                    id="amountPaid"
                    value={amountPaid}
                    onChange={onChange}
                    className="pl-10 md:w-[20vw] lg:w-[10vw]"
                    step="0.1"
                  />
                  <span className="ml-2">/hr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="py-10">
            <h1 className="text-5xl font-medium mb-5">Upload payment info</h1>
            <p className="text-sm max-w-lg">
              This helps your Job post stand out to the right candidate. It’s
              the first thing they’ll see. So make it count!
            </p>
            <div className="flex items-center justify-start mt-10 space-x-5">
              <div className="flex items-center">
                <input type="radio" name="method" id="" checked disabled />
                <Image
                  src="/images/flow.png"
                  width={50}
                  height={200}
                  alt="flow"
                  className="ml-1"
                />
              </div>
              {/* <div className="flex items-center">
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
              </div> */}
            </div>
            <div className="mt-10">
              <div className="">
                <label htmlFor="">Wallet Name</label>
                <input
                  type="text"
                  id="walletName"
                  value={formData.email}
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
                  value={user.addr}
                  onChange={onChange}
                  placeholder="Wallet Address"
                  className="block w-full py-3 px-4 bg-transparent border border-[#D0D2D6] text-sm"
                />
              </div>
            </div>
            {/* PREV/NEXT BUTTONS */}
            <div className="mt-28 flex justify-between items-center flex-col md:flex-row space-y-5 md:space-y-0">
              <button
                type="button"
                className="border w-full md:w-auto border-[#001E00] text-[#001E00] font-medium py-3 px-8 rounded-full"
                onClick={() => {
                  setNext("page-2");
                  window.scroll(0, 0);
                }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={createFreelancer}
                className="bg-[#00EF7C] w-full md:w-auto text-[#001E00] py-3 px-8 rounded-full border border-[#00EF7C] font-medium"
              >
                Submit Profile
              </button>
            </div>
          </div>
        </div>
      )}
      {next === "page-4" && (
        <div className="rounded-lg py-20 px-10 max-w-4xl mx-auto">
        <div className="w-full h-[200px] flex justify-center items-center">
          <div className="relative">
            <Image
              src="/svg/jobPost.svg"
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
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            Amazing effort, {formData.name}!
          </h1>
          <h1 className="text-xl md:text-4xl font-bold mb-5">
            Your profile is being reviewed.
          </h1>
          <p className="mb-5">
            Congratulations, with thousands of jobs to pick from, it is time for
            you to make your first pick and start your bidding on roles that
            best fit your portfolio
          </p>
          {/* PREV/NEXT BUTTONS */}
          <div className="mt-10 flex justify-between items-center flex-col md:flex-row space-y-5 md:space-y-0 max-w-2xl mx-auto">
            <Link
              href="/profile"
              scroll={false}
              className="border w-full md:w-auto border-[#00EF7C] text-[#001E00] font-medium py-3 px-20 rounded-full"
            >
              View My Profile
            </Link>
            <Link
              href="/Job"
              className="bg-[#00EF7C] w-full md:w-auto text-[#001E00] py-3 px-20 rounded-full border border-[#00EF7C] font-medium"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
      )}
    </>
  );
}