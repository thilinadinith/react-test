import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductData } from '../components/Types/ProductType';
import { getWomenClothes } from '../services/apiBase';
import { RootState } from './store';

//interface created for pageState using common Types IProductData
export interface IPageState {
  data: Array<IProductData>,
  sizes:Array<string>,
}
//initializing inital state of IPageState
const initialState: IPageState = {
  data: [],
  sizes: [],
};
//creating async thunk for data retirival, extrareducers will fire when data response successful
export const fetchProductData = createAsyncThunk('women-clothes/fetchProductData', async () => {
  const response = await getWomenClothes();
  return response.data
})

//creating slice using initial state and define reduces
export const ProductDataSlice = createSlice({
  name: 'ProductData',
  initialState,
  reducers: {
    setData: (state, action:PayloadAction<Array<any>>) => {
      state.data =  action.payload;
    },
    setSizes: (state, action:PayloadAction<Array<string>>) => {
      state.sizes = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.data = action.payload;
      //get sizes from the json flat the hirachey and create a set to remove duplicates
      state.sizes = Array.from(new Set(action.payload.map((item: any) => item.size).flat()))
      //adding all selection to the 0 index of the array bu unshift
      state.sizes.unshift('All')
    })
  }

});

export const { setData, setSizes } = ProductDataSlice.actions;

export default ProductDataSlice.reducer;

