import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "@/state/filter/filterSlice";
import { Slider } from "./ui/slider";

const FiltersMenu = () => {
  // const sortOptions = [
  //   { name: "Top Rated", selector: "isTopRatedSelected" },
  //   { name: "Newest", selector: "isNewestSelected" },
  //   { name: "Featured", selector: "isFeaturedSelected" },
  // ];
  const beds = [1, 2, 3, 4, 5];
  const lookingForOptions = ["Girls", "Boys"];

  const {
    selectedDistance,
    selectedMonthlyFeeMinimum,
    selectedMonthlyFeeMaximum,
    selectedNoOfBeds,
    selectedReservedFor,
    isFeaturedSelected,
    isTopRatedSelected,
    isNewestSelected,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Selected Filters:", {
      Distance: selectedDistance,
      MonthlyFeeMinimum: selectedMonthlyFeeMinimum,
      MonthlyFeeMaximum: selectedMonthlyFeeMaximum,
      NoOfBeds: selectedNoOfBeds,
      ReservedFor: selectedReservedFor,
      isFeaturedSelected,
      isTopRatedSelected,
      isNewestSelected,
    });
  }, [
    selectedDistance,
    selectedMonthlyFeeMinimum,
    selectedMonthlyFeeMaximum,
    selectedNoOfBeds,
    selectedReservedFor,
    isFeaturedSelected,
    isTopRatedSelected,
    isNewestSelected,
  ]);

  useEffect(() => {
    if (selectedMonthlyFeeMinimum && selectedMonthlyFeeMaximum) {
      if (selectedMonthlyFeeMinimum > selectedMonthlyFeeMaximum) {
        dispatch(
          setFilters({ selectedMonthlyFeeMaximum: selectedMonthlyFeeMinimum })
        );
      }
    }
  }, [selectedMonthlyFeeMinimum, dispatch, selectedMonthlyFeeMaximum]);

  return (
    <div className="p-[1.25rem]">
      <div className="flex flex-col md:flex-row lg:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          {/* Filter Ads By */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[1.15rem] font-bold">Filter Ads By</h1>
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2 flex-1">
                  <Checkbox
                    id={`featured`}
                    checked={isFeaturedSelected}
                    onCheckedChange={() =>
                      dispatch(
                        setFilters({
                          isFeaturedSelected: !isFeaturedSelected ? true : null,
                        })
                      )
                    }
                  />
                  <label
                    htmlFor={`featured`}
                    className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                  >
                    Featured
                    <Badge className="">10</Badge>
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 flex-1">
                  <Checkbox
                    id={`top-rated`}
                    checked={isTopRatedSelected}
                    onCheckedChange={() =>
                      dispatch(
                        setFilters({
                          isTopRatedSelected: !isTopRatedSelected ? true : null,
                        })
                      )
                    }
                  />
                  <label
                    htmlFor={`top-rated`}
                    className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                  >
                    Top Rated
                    <Badge className="">10</Badge>
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-2 flex-1">
                  <Checkbox
                    id={`newest`}
                    checked={isNewestSelected}
                    onCheckedChange={() =>
                      dispatch(
                        setFilters({
                          isNewestSelected: isNewestSelected ? null : true,
                        })
                      )
                    }
                  />
                  <label
                    htmlFor={`newest`}
                    className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                  >
                    Newest
                    <Badge className="">10</Badge>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-secondary-100" />

          {/* Distance Filter */}
          <div className="flex flex-col gap-4 mb-2">
            <h1 className="text-[1.15rem] font-bold">
              Distance from University
            </h1>
            <div className="flex flex-col gap-1">
              {selectedDistance && <span>{selectedDistance}km</span>}
              <Slider
                value={[selectedDistance]}
                min={0.5}
                max={10}
                step={0.5}
                // className="border border-secondary-100 rounded"
                onValueChange={(value) =>
                  dispatch(setFilters({ selectedDistance: value[0] }))
                }
              />
            </div>
          </div>
          <hr className="border-secondary-100" />
          {/* Gender Filter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[1.15rem] font-bold">Looking for</h1>
            <div className="flex flex-col gap-1">
              {lookingForOptions.map((gender, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-2 flex-1">
                    <Checkbox
                      id={`gender-${index}`}
                      checked={selectedReservedFor === gender}
                      onCheckedChange={() =>
                        dispatch(setFilters({ selectedReservedFor: gender }))
                      }
                    />
                    <label
                      htmlFor={`gender-${index}`}
                      className="text-[1rem] cursor-pointer flex items-center justify-between flex-1"
                    >
                      {gender}
                      <Badge className="">10</Badge>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="md:hidden lg:block border-secondary-100" />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {/* Monthly Fee Filter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[1.15rem] font-bold">Monthly Fee</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span>Minimum</span>
                  {selectedMonthlyFeeMinimum && (
                    <span>Rs {selectedMonthlyFeeMinimum}</span>
                  )}
                </div>
                <Slider
                  value={[selectedMonthlyFeeMinimum]}
                  min={1000}
                  max={30000}
                  step={500}
                  onValueChange={(value) =>
                    dispatch(
                      setFilters({ selectedMonthlyFeeMinimum: value[0] })
                    )
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span>Maximum</span>
                  {selectedMonthlyFeeMaximum && (
                    <span>Rs {selectedMonthlyFeeMaximum}</span>
                  )}
                </div>
                <Slider
                  value={[selectedMonthlyFeeMaximum]}
                  min={selectedMonthlyFeeMinimum}
                  max={30000}
                  step={500}
                  onValueChange={(value) =>
                    dispatch(
                      setFilters({ selectedMonthlyFeeMaximum: value[0] })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <hr className="border-secondary-100" />

          {/* No of Beds Filter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[1.15rem] font-bold">No of Beds</h1>
            <div className="flex flex-col gap-1">
              {beds.map((bed, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex items-center gap-2 flex-1">
                    <Checkbox
                      id={`bed-${index}`}
                      checked={selectedNoOfBeds === bed}
                      onCheckedChange={() =>
                        dispatch(setFilters({ selectedNoOfBeds: bed }))
                      }
                    />
                    <label
                      htmlFor={`bed-${index}`}
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

      {/* Clear Filters Button */}
      {(selectedReservedFor ||
        selectedDistance ||
        selectedMonthlyFeeMinimum ||
        selectedMonthlyFeeMaximum ||
        selectedNoOfBeds ||
        isFeaturedSelected ||
        isTopRatedSelected ||
        isNewestSelected) && (
        <Button
          size="lg"
          variant="outline"
          className="mt-6 w-full"
          onClick={() => dispatch(resetFilters())}
        >
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default FiltersMenu;
