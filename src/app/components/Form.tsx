import { useState, useMemo } from "react";
import Link from "next/link";
// import { Editor } from 'react-draft-wysiwyg';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";


export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    // email: "",
    // password: "",
    description: "",
    about: "",
  });

  const {
    // jobRole,
    // jobCategory,
    // city,
    // country,
    // address,
    // postalCode,
    // phoneNumber,
    description,
    about,
  } = formData;

  function handleProcedureContentChange(content: any, delta: any, source: any, editor: any){
    setFormData((prevState) => ({
      ...prevState,
      description: content,
      about: content,
    }));
  }

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <form>
      <div className="space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b border-gray-900/10 pb-12">
              <div className="sm:col-span-3">
                <label htmlFor="jobType" className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </label>
                <div className="mt-2">
                  <select id="jobType" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6" >
                    <option value="One-time">One-time</option>
                    <option value="Full-time">Full-time</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="jobLocation" className="block text-sm font-medium leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2">
                <select id="jobLocation" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6" >
                    <option value="Remote">Remote</option>
                    <option value="On Site">On Site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="jobValue" className="block text-sm font-medium leading-6 text-gray-900">
                  Value
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="jobValue"
                    placeholder="USD"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="priceType" className="block text-sm font-medium leading-6 text-gray-900">
                  Price Type
                </label>
                <div className="mt-2">
                <select id="priceType" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6" >
                    <option value="Remote">Remote</option>
                    <option value="On Site">On Site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="jobDuration" className="block text-sm font-medium leading-6 text-gray-900">
                  Duration
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="jobDuration"
                    placeholder="Job Duration In Days"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="taskCategories" className="block text-sm font-medium leading-6 text-gray-900">
                  Task Categories
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="taskCategories"
                    placeholder="Select skills"
                    autoComplete="taskCategories"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="requiredSkills" className="block text-sm font-medium leading-6 text-gray-900">
                  Required Skills
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="requiredSkills"
                    placeholder="Select skills"
                    autoComplete="requiredSkills"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
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
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Your email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                Your/Company name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="companyName"
                  placeholder="Your/Company name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
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
  )
}
