import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    distanceFromUniversity: "",
    lookingFor: "",
    noOfBeds: "",
    monthlyFeeRange: "",
  });

  const handleSubmit = (event, searchTerm, filters) => {
    event.preventDefault();
    if (
      !searchTerm &&
      !filters.distanceFromUniversity &&
      !filters.lookingFor &&
      !filters.noOfBeds &&
      !filters.monthlyFeeRange
    ) {
      return;
    }
    console.log(searchTerm, filters);
  };

  const resetFilters = () => {
    setFilters({
      distanceFromUniversity: "",
      lookingFor: "",
      noOfBeds: "",
      monthlyFeeRange: "",
    });
  };

  return (
    <div className="bg-white shadow-custom rounded-lg px-[1.25rem] py-[1.875rem]">
      <form
        className="flex flex-col gap-4"
        onSubmit={(event) => handleSubmit(event, searchTerm, filters)}
      >
        <div className="flex flex-1 gap-4">
          <Input
            type="text"
            placeholder="Search by name, location or keyword..."
            size="lg"
            className="h-auto w-full p-[0.9rem] focus-visible:ring-secondary-700 !text-[1.05rem]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            size="lg"
            className="hidden md:flex h-auto w-auto text-[1.05rem]"
          >
            <Search />
            Search
          </Button>
        </div>
        <div className="flex flex-col md:flex-row flex-1 gap-4">
          <Select
            className=""
            value={filters.distanceFromUniversity}
            onValueChange={(value) => {
              setFilters({ ...filters, distanceFromUniversity: value });
            }}
          >
            <SelectTrigger className="text-[1rem]">
              <SelectValue placeholder="Distance from university" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Distance (km)</SelectLabel>
                <SelectItem value="1">0-1</SelectItem>
                <SelectItem value="2">1-2</SelectItem>
                <SelectItem value="3">2-3</SelectItem>
                <SelectItem value="4">3-4</SelectItem>
                <SelectItem value="5">4-5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={filters.lookingFor}
            onValueChange={(value) =>
              setFilters({ ...filters, lookingFor: value })
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Looking for" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Looking for</SelectLabel>
                <SelectItem value="girls">Girls</SelectItem>
                <SelectItem value="boys">Boys</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={filters.noOfBeds}
            onValueChange={(value) =>
              setFilters({ ...filters, noOfBeds: value })
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="No of Beds" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>No of Beds</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={filters.monthlyFeeRange}
            onValueChange={(value) =>
              setFilters({ ...filters, monthlyFeeRange: value })
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Monthly Fee" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Monthly Fee</SelectLabel>
                <SelectItem value="1000-2000">1000-2000</SelectItem>
                <SelectItem value="2000-3000">2000-3000</SelectItem>
                <SelectItem value="3000-4000">3000-4000</SelectItem>
                <SelectItem value="4000-5000">4000-5000</SelectItem>
                <SelectItem value="5000-6000">5000-6000</SelectItem>
                <SelectItem value="6000-7000">6000-7000</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            size="lg"
            variant="ghost"
            className="hidden md:flex h-auto w-auto"
            type="reset"
            onClick={() => resetFilters()}
          >
            Clear Filters
          </Button>
        </div>
        <Button
          type="submit"
          size="lg"
          className="md:hidden text-[1.05rem] py-7"
        >
          <Search />
          Search
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="md:hidden"
          type="reset"
          onClick={() => resetFilters()}
        >
          Clear Filters
        </Button>
      </form>
    </div>
  );
};

export default SearchMenu;
