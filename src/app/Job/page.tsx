export default function Job(){
    return <div>
        <div className="px-8 py-10 border rounded-lg max-w-screen-md mx-auto mt-20">
          <h1 className="text-2xl text-[#102638] mb-8">Additional Details</h1>
          <h1>Cover Letter</h1>
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
        </div>
    </div>
}