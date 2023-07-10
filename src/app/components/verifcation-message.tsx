import Image from "next/image";

export default function VerificationMessage() {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className="w-[240px]">
        <Image src="/images/email.jpg" alt="logo" width={240} height={100} />
      </div>
      <div className="mt-12">
        <p className="text-2xl font-medium text-center">
          Verify your email address to complete address registration
        </p>
        <p className="mt-10">Hi, Morgan</p>
        <p className="mt-5">
          Thanks for your interest in joining Declan work to complete your
          registration you need to verify your email address.
        </p>

        <div className="text-center mt-10">
          <button className="bg-[#00EF7C] py-3 px-20 text-center rounded-lg transition duration-200 ease-in-out">
            Verify Email
          </button>
        </div>

        <p className="mt-10"> Please note that not all application to join Declan work is accepted we will notify you of our decision by email.</p>
        <p className="mt-5">Thanks for your time</p>
        <p>Declan Work Team</p>
      </div>
    </div>
  );
}
