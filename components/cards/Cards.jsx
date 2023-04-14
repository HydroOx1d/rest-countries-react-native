import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Card from './Card'

const CardsView = styled.View`
  
`

const CardItem = styled.View`
  margin-bottom: 20px;
`

const Cards = () => {
  return (
    <CardsView>
      <CardItem>
        <Card />
      </CardItem>
      <CardItem>
        <Card />
      </CardItem> 
    </CardsView>
  );
}

export default Cards