import { createSlice } from '@reduxjs/toolkit'

export const oggettiSlice = createSlice({
    name: 'oggetti',
    initialState:{
        selectedCategory: "ANELLI"
    },
    reducers: {
filterCategory:(state, action) => {
    state.selectedCategory = action.payload;
}
    }
})

export const getSelectedCategory = state => state.oggetti.selectedCategory;
export const { filterCategory } = oggettiSlice.actions;
export default oggettiSlice.reducer;