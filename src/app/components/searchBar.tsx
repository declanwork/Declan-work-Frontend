import { BiSearch } from 'react-icons/bi';

export default function SearchBar(){
  return (
    //   <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        // <div className="md:flex">
        //   <div className="w-full p-3">
            <div className="bg-black">
              {/* <i></i> */}
              <BiSearch className="absolute fa fa-search text-gray-400 top-5 left-4" />
              <input
                type="text"
                className="bg-white h-9 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                name=""
                placeholder="Search"
              />
              <span className="absolute top-4 right-5 border-l pl-4">
                <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
              </span>
            </div>
        //   </div>
        // </div>
    //   </div>
  );
};