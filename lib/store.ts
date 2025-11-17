import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './slices/navigation-slice'
import contactReducer from './slices/contact-slice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    contact: contactReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
