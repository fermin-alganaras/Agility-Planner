import { createSlice } from '@reduxjs/toolkit'

export const leftNavSlice = createSlice({
  name: 'leftNav',
  initialState: {
    selectedView: "Calendario",
    items: [
        "Agility",
        "Fundamentacion",
        "Calendario",
        "Mis ejercicios",
    ],
  },
  reducers: {
    changeView: (state, { payload }) => {
      state.selectedView = payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeView } = leftNavSlice.actions

export default leftNavSlice.reducer