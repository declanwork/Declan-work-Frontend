import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#00360C] h-[150vh] flex flex-col overflow-hidden">
        <div className="">
          <h1 className="mt-32 text-5xl text-center text-[#00EF7C] font-bold tracking-[0.4px] leading-[65px]">
            Hire Crypto & Web3 Talent:
          </h1>
          <h1 className="text-5xl text-center text-[#00EF7C] font-bold tracking-[0.4px] leading-[65px]">
            Unlocking the Power of Blockchain Expertise
          </h1>
          <p className="text-[#ADFFC8] text-center mt-9 tracking-[0.4px] leading-[22px]">
            How to hire Cryptocurrency Talent? Glad you asked! Hire them
            <br />
            directly on Crypto Jobs List.
          </p>
          <div className="text-center mt-9">
            <button className="border border-[#00EF7C] bg-[#00EF7C] text-[#163300] font-semibold py-3 px-4 rounded-full mr-4">
              Hire Freelancers
            </button>
            <button className="border border-[#00EF7C] text-[#00EF7C] font-semibold py-3 px-4 rounded-full">
              I'm a Freelancer
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <Image
              src="/images/hero.jpeg"
              alt="Hero"
              className="ml-64 mt-[70px] rounded"
              width={400}
              height={200}
            />
          </div>
          <div className="-translate-x-[7.5rem]">
            <Image
              src="/images/hero2.jpeg"
              alt="Hero-2"
              className="rounded z-10"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
