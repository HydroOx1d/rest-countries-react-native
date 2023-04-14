import axios from 'axios'

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  params: {
    fields: "name,flags,population,area,languages,idd,borders"
  }
})


export const getAllCountry = async () => {
  try {
    const res = await instance.get('/all');

    return res.data;
  } catch(err) {
    console.log(err)
    throw new Error('error while trying to get a list of countries')
  }
}

export const getAllCountryByRegion = async (region) => {
  try {
    const res = await instance.get('/region/' + region);

    return res.data
  } catch(err) {
    console.log(err)
    throw new Error('error while trying to get a list of countries')
  }
}