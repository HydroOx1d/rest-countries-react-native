import { View, Text, Button, StatusBar, ActivityIndicator } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/header/Header'
import Search from '../components/search/Search'
import Cards from '../components/cards/Cards'
import { fetchCountries } from '../store/slices/countrySlice'

const GlobalWrap = styled.View`
  padding: 15px;
  height: 100%;
`;

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(state => state.countries);


  React.useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <GlobalWrap>
      <Header />
      <View
        style={{
          marginTop: 40,
        }}
      >
        <Search />
      </View>
      <View
        style={{
          marginTop: 40,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} />
        ) : data.length <= 0 ? (
          <Text>Ничего не найдено</Text>
        ) : (
          <Cards
            countries={data}
            navigation={navigation}
            isLoading={isLoading}
            fetchCountries={fetchCountries}
          />
        )}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: 50,
        }}
      >
        <Button title="Избранные страны" onPress={() => navigation.navigate('Favorites')}/>
      </View>
      <StatusBar theme={"auto"} />
    </GlobalWrap>
  );
}

export default Home