import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllCountry, getAllCountryByRegion } from '../../api/index'

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (_, {dispatch}) => {
  const data = await getAllCountry();

  dispatch(setCountries(data))
})

export const fetchCountriesByRegion = createAsyncThunk('countries/fetchCountriesByRegion', async (region, {dispatch}) => {
  const data = await getAllCountryByRegion(region);

  dispatch(setCountriesByRegion(data))
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
    },

    setCountriesByRegion: (state, action) => {
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

    builder.addCase(fetchCountriesByRegion.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCountriesByRegion.fulfilled, (state) => {
      state.isLoading = false
    })
  }
})

const { setCountries, setCountriesByRegion } = CountrySlice.actions

export const countryReducer = CountrySlice.reducer