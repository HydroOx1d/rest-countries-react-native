import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import FullCard from '../components/cards/FullCard'
import styled from 'styled-components'

const GlobalWrap = styled.View`
  padding: 15px;
`;

const Details = ({ route, navigation }) => {
  const country = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: country.name
    })
  })

  return (
    <GlobalWrap>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FullCard
          country={{
            name: country.name,
            flag: country.flag,
            population: country.population,
            area: country.area,
            languages: country.languages,
            idd: country.idd,
            borders: country.borders,
          }}
          navigation={navigation}
        />
      </ScrollView>
    </GlobalWrap>
  );
}

export default Details