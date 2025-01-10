import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import { useEffect } from "react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setFilters } from "@/state/filter/filterSlice";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Slider } from "./ui/slider";

const FilterSidebar = () => {
  const rates = [5, 4, 3, 2, 1];
  const beds = [1, 2, 3, 4, 5];
  const monthlyFees = [1000, 2000, 3000, 4000, 5000];

  const {
    selectedRate,
    selectedDistance,
    selectedMonthlyFee,
    selectedNoOfBeds,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(
      selectedRate,
      selectedDistance,
      selectedMonthlyFee,
      selectedNoOfBeds
    );
  }, [selectedRate, selectedDistance, selectedMonthlyFee, selectedNoOfBeds]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ListFilter />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="h-full overflow-y-scroll w-80">
        <SheetHeader>
          <SheetTitle className="text-start">Filters</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="pt-2 pb-6">
          <div className="flex flex-col gap-6">

            
            
            {/* Distance Filter */}
            <div className="flex flex-col gap-4 mb-2">
              <h1 className="text-[1.25rem] font-bold">
                Distance from University
              </h1>
              <div className="flex flex-col gap-1">
                {selectedDistance && <span>{selectedDistance}km</span>}
                <Slider
                  value={[selectedDistance || 1]}
                  min={0.5}
                  max={10}
                  step={0.5}
                  onValueChange={(value) =>
                    dispatch(setFilters({ selectedDistance: value[0] }))
                  }
                />
              </div>
            </div>
            <hr className="border-secondary-100" />
            {/* Rate Filter */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[1.25rem] font-bold">Rate</h1>
              <div className="flex flex-col gap-1">
                {rates.map((rate, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox
                        id={`rate-2-${index}`}
                        checked={selectedRate === rate}
                        onCheckedChange={() =>
                          dispatch(setFilters({ selectedRate: rate }))
                        }
                      />
                      <label
                        htmlFor={`rate-2-${index}`}
                        className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                      >
                        {rate} stars
                        <Badge className="">10</Badge>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Monthly Fee Filter */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[1.25rem] font-bold">Monthly Fee</h1>
              <div className="flex flex-col gap-1">
                {monthlyFees.map((fee, index) => (
                  <div key={index} className="flex items-center ">
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox
                        id={`fee-2-${index}`}
                        checked={selectedMonthlyFee === fee}
                        onCheckedChange={() =>
                          dispatch(setFilters({ selectedMonthlyFee: fee }))
                        }
                      />
                      <label
                        htmlFor={`fee-2-${index}`}
                        className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                      >
                        Rs {fee}
                        <Badge className="">10</Badge>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* No of Beds Filter */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[1.25rem] font-bold">No of Beds</h1>
              <div className="flex flex-col gap-1">
                {beds.map((bed, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Checkbox
                        id={`bed-2-${index}`}
                        checked={selectedNoOfBeds === bed}
                        onCheckedChange={() =>
                          dispatch(setFilters({ selectedNoOfBeds: bed }))
                        }
                      />
                      <label
                        htmlFor={`bed-2-${index}`}
                        className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                      >
                        {bed}
                        <Badge className="">10</Badge>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <div className="flex flex-1 gap-2">
            <SheetClose asChild>
              <Button
                size=""
                variant="outline"
                className="flex-1"
                disabled={
                  !selectedRate &&
                  !selectedDistance &&
                  !selectedMonthlyFee &&
                  !selectedNoOfBeds
                }
                onClick={() => {
                  dispatch(resetFilters());
                }}
              >
                Clear Filters
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button type="submit" className="flex-1">
                Apply Filters
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidebar;
