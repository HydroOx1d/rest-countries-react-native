import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { getCountryByAlphaCode } from '../../api';

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

const CardCountryBorders = styled.View`
  
`

const CardCountryBorderTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 15px;
`

const CardCountryBorderItem = styled.Text`
  color: #0000EE;
  font-size: 18px;
  margin-bottom: 10px;
`;

const FullCard = ({ country, navigation }) => {
  const [bordersCountry, setBordersCountry] = React.useState([])

  const getBorderCountry = (borderCountry) => {
    if(borderCountry.length <= 0) {
      return;
    }

    const fetchBorderCountry = borderCountry.map(border => getCountryByAlphaCode(border))
    
    Promise.all(fetchBorderCountry).then((countries) =>
      setBordersCountry(countries)
    );
  }

  React.useEffect(() => {
    getBorderCountry(country.borders)
  })

  return (
    <FullCardView>
      <FullCardImage source={{ uri: country.flag }} />

      <CardDescBlock>
        <CardDescItem>
          <CardDescName>Название:</CardDescName>
          <CardDescText>{country.name}</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Население:</CardDescName>
          <CardDescText>{country.population} чел.</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Площадь:</CardDescName>
          <CardDescText>{country.area} км2</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Код страны:</CardDescName>
          <CardDescText>{country.idd.root}</CardDescText>
        </CardDescItem>

        <CardDescItem>
          <CardDescName>Языки:</CardDescName>
          <CardDescText>
            {Object.values(country.languages).join(", ")}
          </CardDescText>
        </CardDescItem>
      </CardDescBlock>

      <CardCountryBorders>
        <CardCountryBorderTitle>Соседние страны</CardCountryBorderTitle>
        {bordersCountry.length > 0 ? (
          bordersCountry.map((border) => (
            <TouchableOpacity
              key={border.translations.rus.common}
              onPress={() =>
                navigation.navigate("Details", {
                  name: border.translations.rus.official,
                  flag: border.flags.png,
                  population: border.population,
                  area: border.area,
                  languages: border.languages,
                  idd: border.idd,
                  borders: border.borders,
                })
              }
            >
              <CardCountryBorderItem>
                {border.translations.rus.official}
              </CardCountryBorderItem>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Нет соседей</Text>
        )}
      </CardCountryBorders>
    </FullCardView>
  );
}

export default FullCard