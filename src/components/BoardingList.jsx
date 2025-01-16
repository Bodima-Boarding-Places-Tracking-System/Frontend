import { boardingPlaces } from "@/data/sample";
import { useEffect, useState } from "react";
import BoardingCard from "./BoardingCard";
import FiltersMenu from "./FiltersMenu";
import FilterSidebar from "./FilterSidebar";
import { useIsTabSize } from "@/hooks/use-tablet";
import { ListFilter } from "lucide-react";
import { Button } from "./ui/button";

const BoardingList = () => {
  const [boardingList, setBoardingList] = useState([]);
  const [isFilterView, setIsFilterView] = useState(false);
  const isTablet = useIsTabSize();

  const fetchBoardingList = async () => {
    const data = boardingPlaces;
    setBoardingList(data);
  };

  useEffect(() => {
    fetchBoardingList();
  }, []);

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-[1.85rem] md:text-[2rem] font-bold">
          Total Ads ({boardingList.length})
        </h1>
        <hr className="flex-1 mt-2" />

        <div className="lg:hidden">
          {isTablet && (
            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsFilterView(!isFilterView)}
            >
              <ListFilter />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {isTablet && isFilterView && (
          <div className="md:w-full h-fit bg-secondary-50 rounded-lg border border-secondary-100">
            <FiltersMenu />
          </div>
        )}
        {!isTablet && (
          <div className="w-60 h-fit bg-secondary-50 rounded-lg border border-secondary-100">
            <FiltersMenu />
          </div>
        )}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 h-fit gap-4 flex-1">
          {boardingList.length > 0 &&
            boardingList.map((boarding, index) => (
              <BoardingCard key={index} boarding={boarding} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BoardingList;
