import { createSlice } from '@reduxjs/toolkit'

interface NavigationState {
  isDrawerOpen: boolean
}

const initialState: NavigationState = {
  isDrawerOpen: false,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true
    },
  },
})

export const { toggleDrawer, closeDrawer, openDrawer } = navigationSlice.actions
export default navigationSlice.reducer
