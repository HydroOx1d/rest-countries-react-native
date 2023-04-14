import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAllCountry, getAllCountryByRegion, getCountryByName } from '../../api/index'

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (_, {dispatch}) => {
  const data = await getAllCountry();

  dispatch(setCountries(data))
})

export const fetchCountriesByRegion = createAsyncThunk('countries/fetchCountriesByRegion', async (region, {dispatch}) => {
  const data = await getAllCountryByRegion(region);

  dispatch(setCountriesByRegion(data))
})

export const fetchCountriesByName = createAsyncThunk('countries/fetchCountriesByName', async (name, {dispatch}) => {
  const data = await getCountryByName(name)

  dispatch(setCountriesByName(data))
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
    },

    setCountriesByName: (state, action) => {
      state.data = [...action.payload]
    }
  },
  
  extraReducers: (builder) => {
    // fetch all countries
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCountries.fulfilled, (state) => {
      state.isLoading = false
    })

    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false
      state.data = []
    })

    // fetch all countries by region
    builder.addCase(fetchCountriesByRegion.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCountriesByRegion.fulfilled, (state) => {
      state.isLoading = false
    })

    builder.addCase(fetchCountriesByRegion.rejected, (state) => {
      state.isLoading = false
      state.data = []
    })

    // fetch countries by name

    builder.addCase(fetchCountriesByName.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCountriesByName.fulfilled, (state) => {
      state.isLoading = false
    })

    builder.addCase(fetchCountriesByName.rejected, (state) => {
      state.isLoading = false
      state.data = []
    })
  }
})

const { setCountries, setCountriesByRegion, setCountriesByName} = CountrySlice.actions

export const countryReducer = CountrySlice.reducer