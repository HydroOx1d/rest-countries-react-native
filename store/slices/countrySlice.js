import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllCountry } from '../../api/index'

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (_, {dispatch}) => {
  const data = await getAllCountry();

  dispatch(setCountries(data))
})

const initialState = {
  data: [],
  isLoading: true
}

const CountrySlice = createSlice({
  name: "countries",
  initialState,
  
  reducers: {
    setCountries: (state, action) => {
      state.data = [...action.payload]
    }
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCountries.fulfilled, (state) => {
      state.isLoading = false
    })
  }
})

const { setCountries } = CountrySlice.actions

export const countryReducer = CountrySlice.reducer