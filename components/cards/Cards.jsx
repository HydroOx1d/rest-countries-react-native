import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import Card from './Card'

const CardsView = styled.View`
  
`

const CardItem = styled.View`
  margin-bottom: 20px;
`

const Cards = ({ navigation }) => {
  return (
    <CardsView>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <CardItem>
          <Card />
        </CardItem>
      </TouchableWithoutFeedback>
    </CardsView>
  );
};

export default Cards