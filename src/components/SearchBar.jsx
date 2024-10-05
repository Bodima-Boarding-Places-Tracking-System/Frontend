import { HiOutlineSearch, HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <form className="flex-1 md:max-w-fit flex items-stretch gap-2">
      <div className=" flex-1 relative flex items-center border rounded-lg overflow-hidden border-gray-200">
        <input
          className="border-0 focus:ring-0 flex-1 py-3 md:min-w-[200px] text-sm placeholder:text-gray-500"
          type="text"
          required
          placeholder="What are you looking for..."
        />
      </div>
      <button
        type="submit"
        className="w-fit flex items-center gap-2 bg-yellow-300 hover:bg-[#003566] text-black hover:text-white font-medium rounded-lg py-3 px-5 text-sm"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
