import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollState } from "../../types/redux/scroll";

const initialState: ScrollState = {
  scrollPosition: 0,
  scrollDirection: "down"
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<number>) => {
      state.scrollPosition = action.payload
    },
    setScrollDirection(state, action: PayloadAction<'up' | 'down'>) {
      state.scrollDirection = action.payload;
    },
  },
});

export const { setScrollPosition, setScrollDirection } = scrollSlice.actions;
export default scrollSlice.reducer;
