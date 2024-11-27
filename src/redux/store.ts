import { configureStore } from '@reduxjs/toolkit'
import scrollReducer from './window/scrollSlice'
import sectionScrollReducer from './window/sectionScrollSlice'
import dimensionsReducer from './window/dimensionsSlice'

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    dimensions: dimensionsReducer,
    sectionScroll: sectionScrollReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;