import { View, Text } from 'react-native'
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
      title: country.translations.rus.official
    })
  })

  return (
    <GlobalWrap>
      <FullCard country={country} navigation={navigation}/>
    </GlobalWrap>
  )
}

export default Details