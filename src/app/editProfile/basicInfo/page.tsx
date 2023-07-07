"use client";

import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import Link from "next/link";
import Nav from "../../components/Nav";
import { SubText } from "../../components/Header";

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    jobRole: "",
    jobCategory: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    phoneNumber: "",
    bio: "",
  });
  const {
    jobRole,
    jobCategory,
    city,
    country,
    address,
    postalCode,
    phoneNumber,
    bio,
  } = formData;

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleProcedureContentChange(content: any, delta: any, source: any, editor: any){
    setFormData((prevState) => ({
      ...prevState,
      bio: content,
    }));
  }
  const jobRoles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full Stack Developer",
    "Software Engineer",
    "DevOps Engineer",
    "Data Scientist",
    "UX/UI Designer",
    "Product Manager",
    "QA Engineer",
    "System Administrator",
  ];
  const jobCategories = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "DevOps",
    "UI/UX Design",
    "Product Management",
    "Quality Assurance",
    "System Administration",
  ];
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Democratic Republic)",
    "Congo (Republic)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  
  // Example usage:
  console.log(countries);
  

  return (
    <>
    <Nav   />
      <div className="max-w-4xl mx-auto">
        <SubText title="Let's Get Started " subtitle="1/2" />
        <div className="bg-[#00EF7C] p-2 rounded-lg text-center mt-2">
          <p className="text-[#001E00] text-sm">
            Filling out as many fields as possible increases your chances of
            finding the right job. Use this form only if you are looking to get
            employed.
          </p>
        </div>
        <div className="grid grid-cols-2 mt-10">
          {/* Profile Picture Section */}
          <div className="border-r w-60 text-center">
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
            <div className="text-center">
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
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
          </div>
          {/* Personal Info section */}
          <div className="-ml-48 pb-40">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3">
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
                  <option value="" className="text-[#a0a6b2]" disabled selected>
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
            <div className="grid grid-cols-2 gap-3 mt-5">
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
                  <option value="" className="text-[#a0a6b2]" disabled selected>
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
                  City
                </label>
                <div className="relative">
                  <AiOutlineSearch className="absolute bottom-3 left-2" size={20}/>
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
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="">
                <label htmlFor="address" className="text-[#0D0D22]">
                  Street Address
                </label>
                <div className="relative">
                <AiOutlineSearch className="absolute bottom-3 left-2" size={20}/>
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
                  Zip Postal Code
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
            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-3 mt-5">
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
            </div>
            {/* Text Editor */}
            <div className="mt-10">
              <label htmlFor="bio" className="text-[#0D0D22]">
                Bio
              </label>
              <ReactQuill
                theme="snow"
                id="bio"
                value={bio}
                onChange={handleProcedureContentChange}
                className="h-[300px]"
              />
            </div>
            <div className="mt-20">
              <label htmlFor="portfolio">Upload your portfolio</label>
              <input type="file" name="" id="portfolio" className="hidden"/>
              <label htmlFor="portfolio">
                <div className="flex items-center border border-[#CCD1D5] justify-start w-[25vw] text-sm p-3">
                  <FaUpload /> <span className="ml-2">Use a PDF, Doc, Docx, Rtf, and Txt</span>
                </div>
              </label>
            </div>
            {/* PREV/NEXT BUTTONS */}
            <div className="mt-10 flex justify-between items-center">
              <Link href="" scroll={false} className="border border-[#001E00] text-[#001E00] font-medium py-3 px-8 rounded-full">Back</Link>
              <Link href="/editProfile/payments" className="bg-[#00EF7C] text-[#001E00] py-3 px-8 rounded-full border border-[#00EF7C] font-medium">Next</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
