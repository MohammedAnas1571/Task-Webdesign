import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <nav>
      <div className="container lg:px-0 flex justify-between items-center border-b py-7 md:gap-0  relative ">
        {/* iconsection */}
        <div className="text-4xl">
          <img src="/Group 7.png" alt="" />
        </div>
        {/* logosection */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            className="w-24 sm:w-32 md:w-44"
            src="WhatsApp Image 2023-01-10 at 10.41.36 AM.png"
            alt=""
          />
        </div>
        {/* searchbarsection */}
        <div className=" items-center gap-10 hidden md:flex">
          <div className="lg:flex lg:items-center border-b-2 hidden ">
            <input
              type="text"
              className="placeholder:italic placeholder:text-slate-700 text-sm font-normal focus:outline-none min-w-52  py-2"
              placeholder="What are you looking ?"
            />
            <CiSearch className="" />
          </div>
          <button className="bg-[#094237] py-2 px-8 text-sm text-white select-none  ">Enquire</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
