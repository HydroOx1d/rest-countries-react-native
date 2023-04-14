import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

const FullCardView = styled.View`
  
`

const FullCardImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 4px;
`;

const CardDescBlock = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CardDescItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  border-bottom-width: 1px;
  
`;

const CardDescName = styled.Text`
  font-size: 20px;
`;

const CardDescText = styled.Text`
  flex: 1;
  margin-left: 15px;
  text-align: right;
  font-size: 20px;
`;

const FullCard = () => {
  return (
    <FullCardView>
      <FullCardImage source={{ uri: "https://flagcdn.com/w320/kg.png" }} />

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
    </FullCardView>
  );
}

export default FullCard