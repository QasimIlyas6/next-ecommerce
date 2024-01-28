import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: '',
  reducers: {
    searchQuery: (state, action) => {
      return (state = action.payload);
    },
    resetSearch: (state, action) => {
       return state = action.payload;
    }
  },
});

export const { searchQuery, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
