import { HiOutlineFilter } from "react-icons/hi";

const Filters = () => {
  const handleFilters = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">Filters</span>
        <span className="text-lg font-medium">
          <HiOutlineFilter />
        </span>
      </div>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleFilters}>
          <div className="w-full relative flex items-center border-2 rounded border-gray-200">
            <select
              className="border-0 focus:ring-0 flex-1 py-3"
              type="text"
              required
              value={"empty"}
            >
              <option value="empty">Distance to the university</option>
              <option value="1">1 km</option>
              <option value="2">2 km</option>
              <option value="3">3 km</option>
            </select>
          </div>
          <div className="w-full relative flex items-center border-2 rounded border-gray-200">
            <select
              className="border-0 focus:ring-0 flex-1 py-3"
              type="text"
              required
              value={"empty"}
            >
              <option value="empty">Price</option>
              <option value="<5000">Rs 5000 or less</option>
              <option value="<6000">Rs 5000 - Rs 6000</option>
              <option value="<7000">Rs 6000 - Rs 7000</option>
            </select>
          </div>
          <div className="w-full relative flex items-center border-2 rounded border-gray-200">
            <select
              className="border-0 focus:ring-0 flex-1 py-3"
              type="text"
              required
              value={"empty"}
            >
              <option value="empty">No of beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="w-full relative flex items-center border-2 rounded border-gray-200">
            <select
              className="border-0 focus:ring-0 flex-1 py-3"
              type="text"
              required
              value={"empty"}
            >
              <option value="empty">Looking for</option>
              <option value="boys">Boys</option>
              <option value="girls">Girls</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-300 hover:bg-[#003566] hover:text-white font-medium rounded py-3"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filters;
