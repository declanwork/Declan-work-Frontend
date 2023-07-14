"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import proposal1 from "../../../../../public/images/proposal1.png"
import proposal2 from "../../../../../public/images/proposal2.png"

export default function Proposals() {
const proposals= [
    {
    title: "Data Engineer",
    description: "zondacrypto",
    coverLetter: "Cover Letter - I am writing to apply for the Product Designer position at [Company]. I am confident that my 5 years of experience in the field will enable me to make meaningful contributions to the team and help the company achieve its goals. Throughout my career, I have been fortunate to work with some of the most innovative companies in the industry, including Mevron, Nuture tech, and Disgnplus. With each of these companies, I have had the opportunity to play a key role in the design and development of new products, and I have seen firsthand the impact that good design can have on a business.",
    successRate: "90%",
    price: "25,000",
    profileImage: proposal1,
    tag1: ["Remote", "Sales", "Full-Time"],
    tag2: ["Blockchain", "Business Development", "Crypto", "Non-tech", "Web3"],
},
    {
    title: "Head of Sales",
    description: "zondacrypto",
    coverLetter: "Cover Letter - I am writing to apply for the Product Designer position at [Company]. I am confident that my 5 years of experience in the field will enable me to make meaningful contributions to the team and help the company achieve its goals. Throughout my career, I have been fortunate to work with some of the most innovative companies in the industry, including Mevron, Nuture tech, and Disgnplus. With each of these companies, I have had the opportunity to play a key role in the design and development of new products, and I have seen firsthand the impact that good design can have on a business.",
    successRate: "90%",
    price: "25,000",
    profileImage: proposal2,
    tag1: ["Remote", "Sales", "Full-Time"],
    tag2: ["Blockchain", "Business Development", "Crypto", "Non-tech", "Web3"],
}
]


  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-4 mt-16 md:w-3/5 mx-auto text-center">
        <nav className="flex flex-wrap items-center justify-start">
          <ul className="w-full md:w-1/2">
            <li>
              <button>All Proposals ({proposals.length})</button>
            </li>
            <li>
              <button>Shortlisted ()</button>
            </li>
            <li>
              <button>Messages ()</button>
            </li>
          </ul>
        </nav>
      </div>

      <section className="py-20 bg-[#00360C]">
        <Footer />
      </section>
    </>
  );
}
