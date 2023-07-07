import { useState, useMemo } from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  });

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b border-gray-900/10 pb-10">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="One Time"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Remote"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Value
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="last-name"
                    id="last-name"
                    placeholder="USD"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Price Type
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="last-name"
                    id="last-name"
                    placeholder="per project"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Duration
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="street-address"
                    id="street-address"
                    placeholder="Job Duration"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Task Categories
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="task-categories"
                    id="task-categories"
                    placeholder="Select skills"
                    autoComplete="task-categories"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Required Skills
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="required-skills"
                    id="required-skills"
                    placeholder="Select skills"
                    autoComplete="required-skills"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#00EF7C] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <Editor
                  wrapperClassName="wrapper"
                  editorClassName="editor"
                  toolbarClassName="toolbar"
                />
              </div>
              <p className="text-sm text-black font-extralight w-full -mt-6 col-span-full">(min 150 max 5000 now 0)</p>
              <div className="mt- col-span-full">
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
        </div>

        <div className="">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Your email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Your/Company name
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your/Company name"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About You
              </label>
              <Editor
                wrapperClassName="wrapper"
                editorClassName="editor"
                toolbarClassName="toolbar"
              />
            </div>
            <p className="text-sm text-black font-extralight w-full -mt-6 col-span-full">(min 150 max 5000 now 0)</p>
          </div>
        </div>   
      </div>

      <div className="mt-6 flex items-center justify-between gap-x-6">
        <Link href="/newJob/Title" className="text-sm font-semibold px-4 py-2 rounded-2xl border border-[#001E00] leading-6 text-gray-900">
          Back
        </Link>
        <Link
          href="/newJob/PaymentInfo"
          className="rounded-2xl bg-[#00EF7C] px-4 py-2 text-sm font-semibold shadow-sm"
        >
          Next Skill
        </Link>
      </div>
    </form>
  )
}
