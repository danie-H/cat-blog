import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBreeds } from '../../lib/catsFetcher';


export const fetchBreedsAction = createAsyncThunk('get/breeds', async () => {
    const response = await fetchBreeds();
    return response;
  });
  
export const catSlice = createSlice({
  name: 'cats',
  initialState: { breeds: [] },
  reducers: {
    search: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
  },
  extraReducers: {
    [fetchBreedsAction.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBreedsAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.breeds = action.payload;
    },
    [fetchBreedsAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { search } = catSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectBreeds= state => state.cats.breeds;

export default catSlice.reducer;
