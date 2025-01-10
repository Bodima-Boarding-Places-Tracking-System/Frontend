import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDistance: null,
  selectedMonthlyFeeMinimum: null,
  selectedMonthlyFeeMaximum: null,
  selectedNoOfBeds: null,
  selectedReservedFor: null,
  isFeaturedSelected: null,
  isTopRatedSelected: null,
  isNewestSelected: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const {
        selectedDistance,
        selectedMonthlyFeeMinimum,
        selectedMonthlyFeeMaximum,
        selectedNoOfBeds,
        selectedReservedFor,
        isFeaturedSelected,
        isTopRatedSelected,
        isNewestSelected,
      } = action.payload;
      state.selectedDistance =
        selectedDistance !== undefined
          ? state.selectedDistance === selectedDistance
            ? null
            : selectedDistance
          : state.selectedDistance;
      state.selectedMonthlyFeeMinimum =
        selectedMonthlyFeeMinimum !== undefined
          ? state.selectedMonthlyFeeMinimum === selectedMonthlyFeeMinimum
            ? null
            : selectedMonthlyFeeMinimum
          : state.selectedMonthlyFeeMinimum;
      state.selectedMonthlyFeeMaximum =
        selectedMonthlyFeeMaximum !== undefined
          ? state.selectedMonthlyFeeMaximum === selectedMonthlyFeeMaximum
            ? null
            : selectedMonthlyFeeMaximum
          : state.selectedMonthlyFeeMaximum;
      state.selectedNoOfBeds =
        selectedNoOfBeds !== undefined
          ? state.selectedNoOfBeds === selectedNoOfBeds
            ? null
            : selectedNoOfBeds
          : state.selectedNoOfBeds;
      state.selectedReservedFor =
        selectedReservedFor !== undefined
          ? state.selectedReservedFor === selectedReservedFor
            ? null
            : selectedReservedFor
          : state.selectedReservedFor;
      state.isFeaturedSelected =
        isFeaturedSelected !== undefined
          ? state.isFeaturedSelected === isFeaturedSelected
            ? null
            : isFeaturedSelected
          : state.isFeaturedSelected;
      state.isTopRatedSelected =
        isTopRatedSelected !== undefined
          ? state.isTopRatedSelected === isTopRatedSelected
            ? null
            : isTopRatedSelected
          : state.isTopRatedSelected;
      state.isNewestSelected =
        isNewestSelected !== undefined
          ? state.isNewestSelected === isNewestSelected
            ? null
            : isNewestSelected
          : state.isNewestSelected;
    },
    resetFilters: (state) => {
      state.selectedDistance = null;
      state.selectedMonthlyFeeMinimum = null;
      state.selectedMonthlyFeeMaximum = null;
      state.selectedNoOfBeds = null;
      state.selectedReservedFor = null;
      state.isFeaturedSelected = null;
      state.isTopRatedSelected = null;
      state.isNewestSelected = null;
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
