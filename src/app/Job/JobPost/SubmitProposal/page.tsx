"use client";
import NavbarJob from "@/app/components/NavbarJob";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Footer from "@/app/components/footer";
import { useRouter } from 'next/navigation'

export default function SubmitProposal() {
  const router = useRouter();
  const [milestone, setMilestone] = useState(true);
  const [formData, setFormData] = useState({
    numberOfMilestones: "",
    milestoneDuration: "",
    amountForMilestone: "",
    coverLetter: "",
  });
  const { numberOfMilestones, milestoneDuration, amountForMilestone, coverLetter } =
    formData;

  function onChange(e: any) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  function handleFormSubmit(){
    router.push("/Job/JobPost/Congratulations")
  }
  return (
    <div>
      <NavbarJob />
      <div className="pb-20 pt-10 px-3 md:px-0">
        <div className="max-w-screen-md mx-auto border rounded-lg py-10 text-sm md:text-base">
          <h1 className="px-4 md:px-8 text-2xl mb-2 font-medium">Terms</h1>
          <div className="bg-[#00EF7C] p-3 text-center rounded-lg">
            <p className="text-sm">
              See what other freelancers are bidding on jobs with Freelancer
              Plus to get ahead of the competition and win more contracts
            </p>
          </div>
          <h1 className="mt-5 px-4 md:px-8">How do you want to be paid?</h1>
          <div className="px-4 md:px-8 md:py-10 py-5 space-y-3 md:space-y-0 flex flex-col md:flex-row justify-evenly md:items-center">
            <label htmlFor="">
              <input
                type="radio"
                name="methodOfPayment"
                id="byProject"
                className="mr-1"
                onChange={() => setMilestone(false)}
              />
              By Project
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="methodOfPayment"
                id="byMilestone"
                className="mr-1"
                checked={milestone}
                onChange={() => setMilestone(true)}
              />
              By Milestone
            </label>
          </div>
          {milestone && (
            <div>
              <p className="px-4 md:px-4 text-[#102638]">
                Divide the project into smaller segments, called milestones.
                You&apos;ll be paid for milestones as they are completed and
                approved.
              </p>
              <h1 className="px-4 md:px-8 font-medium my-8">
                How many milestones do you want to include?
              </h1>
              <div className="px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="">
                  <label htmlFor="numberOfMilestones">Description</label>
                  <input
                    type="number"
                    id="numberOfMilestones"
                    value={numberOfMilestones}
                    onChange={onChange}
                    placeholder="1"
                    className="block mt-2 w-full p-3 rounded-lg bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
                <div className="">
                  <label htmlFor="milestoneDuration">
                    Due time for the milestone
                  </label>
                  <input
                    type="date"
                    id="milestoneDuration"
                    value={milestoneDuration}
                    onChange={onChange}
                    className="block mt-2 w-full p-3 rounded-lg bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
                <div className="">
                  <label htmlFor="amountForMilestone">Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    id="amountForMilestone"
                    value={amountForMilestone}
                    placeholder="0.01"
                    onChange={onChange}
                    className="block mt-2 w-full p-3 rounded-lg bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
                <div className="">
                  <label htmlFor="milestoneDuration">
                    How long will this project take?
                  </label>
                  <input
                    type="date"
                    id="milestoneDuration"
                    value={milestoneDuration}
                    onChange={onChange}
                    className="block mt-2 w-full p-3 rounded-lg bg-transparent border border-[#D0D2D6] text-sm"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="px-4 md:px-8 py-10 border rounded-lg max-w-screen-md mx-auto mt-20">
          <h1 className="text-2xl text-[#102638] mb-8">Additional Details</h1>
          <h1>Cover Letter</h1>
          {/* <div className="mt-20 text-center">
            <label htmlFor="portfolio">Upload your portfolio</label>
            <input type="file" name="" id="portfolio" className="hidden" />
            <label htmlFor="portfolio">
              <div className="mx-auto flex items-center border border-[#CCD1D5] justify-start w-[25vw] text-sm p-3">
                <FaUpload />{" "}
                <span className="ml-2">Use a PDF, Doc, Docx, Rtf, and Txt</span>
              </div>
            </label>
          </div> */}
          <div className="mt-16 mb-5">
            <label htmlFor="resume" className="">
              Portfolio Link (Hosted CV/resume on Google Drive preferrably)
            </label>
            <input
              type="text"
              id="portfolioLink"
              value=""
            //   onChange={}
              className="block w-[90%] mt-3 md:w-[31.5vw]"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              console.log("Sent")
            }}
            className="py-4 w-[90%] md:w-[31.5vw] px-[118px] rounded font-medium bg-[#00EF7C]"
          >
            Submit
          </button>
          <div className="flex justify-between items-center mt-10">
            <button type="button" className="border py-3 px-4 rounded-lg text-[#001E00]">Cancel</button>
            <button type="button" onClick={handleFormSubmit} className="border py-3 px-4 rounded-lg text-[#001E00] bg-[#00EF7C] border-[#00EF7C]">Submit Proposal</button>
          </div>
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </div>
  );
}
