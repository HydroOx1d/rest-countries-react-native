import { View, Text, TouchableWithoutFeedback, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Card from './Card'
import { useDispatch } from 'react-redux'

const CardsView = styled.View`
  
`

const CardItem = styled.View`
  margin-bottom: 20px;
`

const Cards = ({ navigation, countries, isLoading, fetchCountries }) => {
  const dispatch = useDispatch()
  return (
    <CardsView>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => dispatch(fetchCountries())}/>}
        showsVerticalScrollIndicator={false}
        data={countries}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback
              key={item.translations.rus.common}
              onPress={() => {
                navigation.navigate("Details");
              }}
            >
              <CardItem>
                <Card
                  name={item.translations.rus.official}
                  area={item.area}
                  population={item.population}
                  flag={item.flags.png}
                  iid={item.idd}
                  languages={item.languages}
                  borders={item.borders}
                />
              </CardItem>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </CardsView>
  );
};

export default Cards