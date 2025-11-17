import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactState {
  isModalOpen: boolean
  contactData: {
    name: string
    email: string
    company: string
    budget: string
    message: string
  }
}

const initialState: ContactState = {
  isModalOpen: false,
  contactData: {
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  },
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    openContactModal: (state) => {
      state.isModalOpen = true
    },
    closeContactModal: (state) => {
      state.isModalOpen = false
    },
    updateContactData: (state, action: PayloadAction<Partial<ContactState['contactData']>>) => {
      state.contactData = { ...state.contactData, ...action.payload }
    },
    resetContactData: (state) => {
      state.contactData = {
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      }
    },
  },
})

export const { openContactModal, closeContactModal, updateContactData, resetContactData } = contactSlice.actions
export default contactSlice.reducer
