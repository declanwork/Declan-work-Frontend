"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import proposal1 from "../../../../../../public/images/proposal1.png";
import proposal2 from "../../../../../../public/images/proposal2.png";
import Image from "next/image";
import { HiMail } from "react-icons/hi";

export default function Proposals() {
  const proposals = [
    {
      id: "eee1",
      title: "Data Engineer",
      description: "zondacrypto",
      coverLetter:
        "I am writing to apply for the Product Designer position at [Company]. I am confident that my 5 years of experience in the field will enable me to make meaningful contributions to the team and help the company achieve its goals. Throughout my career, I have been fortunate to work with some of the most innovative companies in the industry, including Mevron, Nuture tech, and Disgnplus. With each of these companies, I have had the opportunity to play a key role in the design and development of new products, and I have seen firsthand the impact that good design can have on a business.",
      successRate: "90%",
      price: "25,000",
      profileImage: proposal1,
      tag1: ["Remote", "Sales", "Full-Time"],
      tag2: [
        "Blockchain",
        "Business Development",
        "Crypto",
        "Non-tech",
        "Web3",
      ],
    },
    {
      id: "eee2",
      title: "Head of Sales",
      description: "zondacrypto",
      coverLetter:
        "I am writing to apply for the Product Designer position at [Company]. I am confident that my 5 years of experience in the field will enable me to make meaningful contributions to the team and help the company achieve its goals. Throughout my career, I have been fortunate to work with some of the most innovative companies in the industry, including Mevron, Nuture tech, and Disgnplus. With each of these companies, I have had the opportunity to play a key role in the design and development of new products, and I have seen firsthand the impact that good design can have on a business.",
      successRate: "90%",
      price: "25,000",
      profileImage: proposal2,
      tag1: ["Remote", "Sales", "Full-Time"],
      tag2: [
        "Blockchain",
        "Business Development",
        "Crypto",
        "Non-tech",
        "Web3",
      ],
    },
  ];
  const shortlist = [];
  const messages = [];
  const proposalItems = [
    "Design Tips and Tutorials: Share short videos demonstrating design techniques, software tips, or quick tutorials to help aspiring designers improve their skills.",
    "Behind-the-Scenes: Provide a glimpse into your creative process by showcasing your workspace, tools, and the steps you take to bring your designs to life.",
    "Product Reviews: Review the latest tech gadgets, tools, or software relevant to design and provide your insights and recommendations.",
    "Startup Journey: Share your experiences as a startup founder, including challenges, successes, and lessons learned. Inspire others who are interested in entrepreneurship.",
    "Q&A Sessions: Encourage your audience to ask questions about design, tech, or startups, and create video responses to address their inquiries.",
    "Collaborations: Collaborate with other designers, tech enthusiasts, or startups to create engaging and informative videos that offer unique perspectives or joint projects.",
  ];
  return (
    <>
      <Navbar />

      <div className="w-11/12 mx-auto">
        <div>
          <div className="pb-2 mt-16 text-center border-b-[1.5px] border-[#D2D2D2] mb-4">
            <nav className="md:w-2/5">
              <ul className="w-4/5 md:w-full flex justify-between flex-wrap leading-loose">
                <li>
                  <button
                    type="button"
                    className={`active:bg-[#dff4eb] bg-[#dff4eb] px-2 text-sm tracking-wide `}
                  >
                    All Proposals ({proposals.length})
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`active:bg-[#dff4eb] px-2 text-sm tracking-wide `}
                  >
                    Shortlisted ({shortlist.length})
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`active:bg-[#dff4eb] px-2 text-sm tracking-wide `}
                  >
                    Messages ({messages.length})
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <section className="md:w-3/5 ">
            {proposals.map((proposal) => {
              return (
                <div
                  className="bg-slate-100 flex items-start my-8 p-4 rounded"
                  key={proposal.id}
                >
                  <Image
                    src={proposal.profileImage}
                    className="rounded-full object-cover"
                    alt="Proposal"
                    width={200}
                    height={200}
                  />
                  <div className="ml-4">
                    <div className="flex items-center flex-wrap gap-2 md:gap-3">
                      <h1 className="font-bold text-xl text-[#001E00]">
                        {proposal.title}
                      </h1>
                      <span className="border ml-4 text-sm text-[#415361] border-slate-400 p-1 rounded-md">
                        $ {proposal.price}
                      </span>
                      <span className="border text-sm text-[#415361] border-slate-400 p-1 rounded-md">
                        {proposal.successRate + " Job Success"}
                      </span>
                    </div>
                    <p className="text-[#001E00] my-1">
                      {proposal.description}
                    </p>
                    <div className="mb-2">
                      {proposal.tag1.map((tag) => {
                        return (
                          <span key={tag} className="mr-2 text-[#415361] ">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      {proposal.tag2.map((tag) => {
                        return (
                          <span
                            className="border text-sm text-[#415361] border-slate-400 p-1 rounded-md"
                            key={tag}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-[#415361] my-4 md:my-3 md:w-5/6">
                      <span className="font-bold">Cover Letter</span>
                      {proposal.coverLetter}
                    </p>
                    <button className="bg-[#00360C] rounded-[27px] h-[54px] w-[200px] px-[16px] text-white my-5">
                      Hire
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <aside className="bg-slate-100 my-8 py-4 px-6 rounded md:w-2/5">
            <div className="flex justify-between items-center">
              <h1 className="text-[#00360C] text-xl font-bold text">
                Proposal
              </h1>
              <span className="bg-inherit rounded-full h-[44px] w-[180px] border border-[#00360C] text-center text-lg flex items-center p-2 justify-around text-[#001E00]">
                Message <HiMail className="text-[#001E00]" />
              </span>
            </div>
            <p className="leading-[1.5] p-1 text-[#272727]">
              Certainly! Creating videos on Instagram can be a great way to
              showcase your design skills, share your enthusiasm for technology,
              and promote your startup. Here&quote;s a content direction and a
              one-month content calendar to get you started: Content Direction:
              <ul className="list-decimal text-[#272727]">
                {proposalItems.map((items, index) => {
                  return <li key={index}>{items}</li>;
                })}
              </ul>
            </p>
            <span>
              <p>Bidding Price</p>
              <p>$15,000 - $20, 000/hr</p>
              <p>Delivery Time</p>
              <p>2 Months</p>
              <button className="bg-[#00360C] rounded-[27px] h-[54px] mx-auto w-[70%] px-[16px] text-white my-5">
                Hire
              </button>
            </span>
          </aside>
        </div>
      </div>
      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </>
  );
}
