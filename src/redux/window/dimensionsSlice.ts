import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DimensionsState {
    innerHeight: number;
    innerWidth: number;
}

const initialState: DimensionsState = {
    innerHeight: 0,
    innerWidth:0,
}


const dimensionsSlice = createSlice({
    name: "dimensions",
    initialState,
    reducers: {
        setInnerHeight: (state, action: PayloadAction<number>) => {
            state.innerHeight = action.payload
        },
        setInnerWidth: (state, action: PayloadAction<number>) => {
            state.innerWidth = action.payload
        },
        setDimensions: (state, action: PayloadAction<{ innerHeight: number; innerWidth: number }>) => {
            state.innerHeight = action.payload.innerHeight;
            state.innerWidth = action.payload.innerWidth;
        },
    }
})

export const {setInnerHeight, setInnerWidth, setDimensions}  = dimensionsSlice.actions

export default dimensionsSlice.reducer;