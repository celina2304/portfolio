import { configureStore } from '@reduxjs/toolkit'
import scrollReducer from './window/scrollSlice'
import dimensionsReducer from './window/dimensionsSlice'

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    dimensions: dimensionsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;