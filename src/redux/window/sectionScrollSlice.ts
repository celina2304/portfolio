// src/store/sectionScrollSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SectionDetails, SectionTranslateDetails, SectionScrollState } from "../../types/redux/sectionScroll";

const initialState: SectionScrollState = {
  sections: [],
};


const sectionScrollSlice = createSlice({
  name: 'sectionScroll',
  initialState,
  reducers: {
    setSectionDetails: (state, action: PayloadAction<SectionDetails>) => {
      const { sectionId, startPosition, endPosition, sectionHeight, sectionTranslate } = action.payload;

      const sectionIndex = state.sections.findIndex(
        (section) => section.sectionId === sectionId
      );

      if (sectionIndex === -1) {
        state.sections.push({
          sectionId,
          startPosition,
          endPosition,
          sectionHeight,
          sectionTranslate
        });
      } else {
        state.sections[sectionIndex] = {
          sectionId,
          startPosition,
          endPosition,
          sectionHeight,
          sectionTranslate
        };
      }
    },
    setSectionTranslate: (state, action: PayloadAction<SectionTranslateDetails>) => {
      const { sectionId, sectionTranslate } = action.payload;
      const sectionIndex = state.sections.findIndex((section) => section.sectionId === sectionId);
      if(sectionIndex !== -1){
        state.sections[sectionIndex].sectionTranslate = sectionTranslate;
      }
    }
  },
});

export const { setSectionDetails, setSectionTranslate } = sectionScrollSlice.actions;
export default sectionScrollSlice.reducer;
