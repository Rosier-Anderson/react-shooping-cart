import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fecthProduct = createAsyncThunk('fetchProduct', async ( ) => {
  const data = await fetch('https://fakestoreapi.com/products?limit=18')
  return data.json()
})
const initialState = {
  loading: false,
  data: [],
  error: '',
};

const productSlice = createSlice({
  name: "cart",
  initialState,
 extraReducers: (builder) => {
  builder.addCase(fecthProduct.pending, (state, action ) => {
    state.loading = true;
  })
  builder.addCase(fecthProduct.fulfilled, (state, action) => {
    state.loading = false;
    state.data = action.payload
  })
  builder.addCase(fecthProduct.rejected, (state, action) => {
    state.error = true;
  })
 }
});

export const {} = productSlice.actions;
export default productSlice.reducer;
