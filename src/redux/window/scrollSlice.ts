import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScrollState {
  scrollY: number; // for tracking current scrollPosition 
  scrollPosition: number; // destination for final scroll position
  scrollDirection: "up" | "down";
}

const initialState: ScrollState = {
  scrollY: 0,
  scrollPosition: 0,
  scrollDirection: "down"
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
    },
    setScrollDirection(state, action: PayloadAction<'up' | 'down'>) {
      state.scrollDirection = action.payload;
    },
  },
});

export const { setScrollY, setScrollPosition, setScrollDirection } = scrollSlice.actions;
export default scrollSlice.reducer;
