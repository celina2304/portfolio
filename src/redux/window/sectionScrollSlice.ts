// src/store/sectionScrollSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SectionDetails, SectionScrollState } from "../../types/redux/sectionScroll";

const initialState: SectionScrollState = {
  sections: [],
};


const sectionScrollSlice = createSlice({
  name: 'sectionScroll',
  initialState,
  reducers: {
    setSectionDetails: (state, action: PayloadAction<SectionDetails>) => {
      const { sectionId, startPosition, endPosition, sectionHeight } = action.payload;

      const sectionIndex = state.sections.findIndex(
        (section) => section.sectionId === sectionId
      );

      if (sectionIndex === -1) {
        state.sections.push({
          sectionId,
          startPosition,
          endPosition,
          sectionHeight,
        });
      } else {
        state.sections[sectionIndex] = {
          sectionId,
          startPosition,
          endPosition,
          sectionHeight,
        };
      }
    },
  },
});

export const { setSectionDetails } = sectionScrollSlice.actions;
export default sectionScrollSlice.reducer;
