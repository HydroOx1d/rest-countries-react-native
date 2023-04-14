import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  margin-top: 10px;
`

const CardDescName = styled.Text`
  font-size: 14px;
`

const CardDescText = styled.Text`
  flex: 1;
  margin-left: 15px;
  font-size: 14px;
`

const CardFavoriteBtn = styled.Button`

`

const Card = ({
  flag,
  name,
  population,
  area,
  iid,
  languages
}) => {
  const [isInFavoriveList, setIsInFavoriveList] = React.useState(false)

  const addToFavoriteList = async (country) => {
    try {
      await AsyncStorage.setItem(country.name, JSON.stringify(country))
      alreadyInFavoriteList(country.name)
    } catch(err) {
      console.log(err)
    }
  }

  const alreadyInFavoriteList = async (name) => {
    
    try {
      const item = await AsyncStorage.getItem(name)

      if(item) {
        setIsInFavoriveList(true)
      } else {
        setIsInFavoriveList(false)
      }
    } catch(err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    alreadyInFavoriteList(name)
  }, [isInFavoriveList])

  return (
    <CardView>
      <CardFlagImage source={{ uri: flag }} />
      <CardDescBlock>
        <CardDescItem>
          <CardDescName>Название:</CardDescName>
          <CardDescText>{name || "Неизвестно"}</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Население:</CardDescName>
          <CardDescText>{population || "Неизвестно"} чел.</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Площадь:</CardDescName>
          <CardDescText>{area || "Неизвестно"} км2</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Код страны:</CardDescName>
          <CardDescText>{iid?.root || "Неизвестно"}</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Языки:</CardDescName>
          <CardDescText>{Object.values(languages).join(", ")}</CardDescText>
        </CardDescItem>
      </CardDescBlock>

      <CardFavoriteBtn
        title={isInFavoriveList ? "Уже в избранном" : "Добавить в избранное"}
        disabled={isInFavoriveList}
        onPress={() =>
          addToFavoriteList({
            flag,
            name,
            population,
            area,
            languages,
            iid,
          })
        }
      />
    </CardView>
  );
};

export default Card