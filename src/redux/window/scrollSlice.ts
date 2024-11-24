import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScrollState {
  scrollY: number;
  scrollPosition: number;
}

const initialState: ScrollState = {
  scrollY: 0,
  scrollPosition: 0,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollY: (state, action: PayloadAction<number>) => {
      state.scrollY = action.payload;
    },
    setScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload
    }
  },
});

export const { setScrollY, setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;
