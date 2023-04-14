import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const CardView = styled.View`
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
`

const CardFlagImage = styled.Image`
  width: 100%;
  height: 200px;
`

const CardDescBlock = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`

const CardDescItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

const CardDescName = styled.Text`
  font-size: 20px;
`

const CardDescText = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-size: 20px;
`

const CardFavoriteBtn = styled.Button`

`

const Card = () => {
  return (
    <CardView>
      <CardFlagImage source={{ uri: "https://flagcdn.com/w320/kg.png" }} />
      <CardDescBlock>
        <CardDescItem>
          <CardDescName>Название:</CardDescName>
          <CardDescText>Kyrgystan</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Население:</CardDescName>
          <CardDescText>1231231</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Площадь:</CardDescName>
          <CardDescText>123123</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Код страны:</CardDescName>
          <CardDescText>+9</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Языки:</CardDescName>
          <CardDescText>
            русский, кыргызский, кыргызский, кыргызский
          </CardDescText>
        </CardDescItem>
      </CardDescBlock>

      <CardFavoriteBtn title="Добавить в избранное"/>
    </CardView>
  );
}

export default Card