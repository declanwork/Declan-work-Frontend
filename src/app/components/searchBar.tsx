import { BiSearch } from 'react-icons/bi';

export default function SearchBar(){
  return (
    //   <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        // <div className="md:flex">
        //   <div className="w-full p-3">
            <div className="p-3">
              <BiSearch className="absolute text-[#ADFFC8] top-5 left-[50rem] font-bold text-2xl" />
              <input
                type="text"
                className="h-9 w-full px-12 rounded-2xl text-[#ADFFC8] hover:cursor-pointer border-2 border-[#ADFFC8] placeholder:text-[#ADFFC8] bg-transparent outline-offset-1 focus:outline-none"
                name=""
                placeholder="Search"
              />
              <div className="absolute top-4 right-36">
                <span className="bg-red-600 w-5 h-5"></span>
                <h1 className="text-[#ADFFC8] hover:cursor-pointer p-1">Talent </h1>
              </div>
            </div>
  );
};