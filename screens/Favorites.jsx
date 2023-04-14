import { View, Text, FlatList, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styled from 'styled-components/native'

const CardView = styled.View`
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
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

const Favorites = ({ navigation }) => {
  const [countries, setCountries] = React.useState([])

  const getCountriesFromStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      const countriesFromStorage = await AsyncStorage.multiGet(keys);
      const countries = [];

      for(let i = 0; i < countriesFromStorage.length; i++) {
        countries.push(JSON.parse(countriesFromStorage[i][1]));
      }

      setCountries(countries)
    } catch(err) {
      console.log(err)
    }
  }

  const deleteCountry = async (name) => {
    try {
      await AsyncStorage.removeItem(name)

      setCountries(countries.filter(country => country.name !== name))
    } catch(err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getCountriesFromStorage()
  }, [])

  if(countries.length <= 0) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 24}}>Список пуст</Text>
      </View>
    )
  }

  return (
    <View style={{
      padding: 15
    }}>
      <FlatList
        data={countries}
        renderItem={({item}) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', item)}>
              <CardView key={item.name}>
                <CardFlagImage source={{ uri: item.flag }} />
                <CardDescBlock>
                  <CardDescItem>
                    <CardDescName>Название:</CardDescName>
                    <CardDescText>{item.name || "Неизвестно"}</CardDescText>
                  </CardDescItem>

                  <CardDescItem>
                    <CardDescName>Население:</CardDescName>
                    <CardDescText>
                      {item.population || "Неизвестно"} чел.
                    </CardDescText>
                  </CardDescItem>

                  <CardDescItem>
                    <CardDescName>Площадь:</CardDescName>
                    <CardDescText>{item.area || "Неизвестно"} км2</CardDescText>
                  </CardDescItem>

                  <CardDescItem>
                    <CardDescName>Код страны:</CardDescName>
                    <CardDescText>
                      {item.idd?.root || "Неизвестно"}
                    </CardDescText>
                  </CardDescItem>

                  <CardDescItem>
                    <CardDescName>Языки:</CardDescName>
                    <CardDescText>
                      {Object.values(item.languages).join(", ")}
                    </CardDescText>
                  </CardDescItem>
                </CardDescBlock>

                <Button
                  title="Удалить"
                  onPress={() => deleteCountry(item.name)}
                />
              </CardView>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  )
}

export default Favorites