import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchBreeds, fetchFavourites, postFavourite, deleteFavourite, fetchBreedImages, fetchBreedDetail } from '../../lib/catsFetcher';


export const fetchBreedsAction = createAsyncThunk('get/breeds', async () => {
    const response = await fetchBreeds();
    return response;
});

export const fetchFavouriteAction = createAsyncThunk('get/favourites', async () => {
  const response = await fetchFavourites();
  return response;
});

export const postFavouritesAction = createAsyncThunk('post/favourites', async (id) => {
  const response = await postFavourite(id);
  return response;
});

export const deleteFavouriteAction = createAsyncThunk('delete/favourite', async (id) => {
  const response = await deleteFavourite(id);
  return response;
});

export const fetchBreedDetailsAction = createAsyncThunk('get/breedDetails', async (name) => {
  const response = await fetchBreedDetail(name);
  return response;
});

export const fetchBreedImagesAction = createAsyncThunk('get/breeImages', async (name) => {
  const response = await fetchBreedImages(name);
  return response;
});


export const catSlice = createSlice({
  name: 'cats',
  initialState: { breeds: [], favourites: [], breedDetails: [], breedImages: []  },
  reducers: {
    search: state => {
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
    [fetchFavouriteAction.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchFavouriteAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.favourites = action.payload;
    },
    [fetchFavouriteAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [postFavouritesAction.pending]: (state) => {
      state.status = 'loading';
    },
    [postFavouritesAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.success = action.payload;

    },
    [postFavouritesAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteFavouriteAction.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteFavouriteAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.success = action.payload;
    },
    [deleteFavouriteAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [deleteFavouriteAction.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteFavouriteAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.success = action.payload;
    },
    [deleteFavouriteAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchBreedDetailsAction.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBreedDetailsAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.breedDetails = action.payload;
    },
    [fetchBreedDetailsAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchBreedImagesAction.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBreedImagesAction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.breedImages = action.payload;
    },
    [fetchBreedImagesAction.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    
  },
});

export const { search } = catSlice.actions;
export const selectBreeds = state => state.cats.breeds;
export const selecFavourites = state => state.cats.favourites;
export const selectStatus = state => state.status;
export const selectBreedDetails = state => state.cats.breedDetails;
export const selectBreedImages = state => state.cats.breedImages;
export default catSlice.reducer;
