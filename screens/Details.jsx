import { View, Text } from 'react-native'
import React from 'react'
import FullCard from '../components/cards/FullCard'
import styled from 'styled-components'

const GlobalWrap = styled.View`
  padding: 15px;
`;

const Details = () => {
  return (
    <GlobalWrap>
      <FullCard/>
    </GlobalWrap>
  )
}

export default Details