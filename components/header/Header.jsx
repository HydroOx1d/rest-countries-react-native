import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { useDispatch } from 'react-redux'
import { fetchCountriesByRegion } from '../../store/slices/countrySlice'

const HeaderView = styled.View`
  margin-left: -5px;
  margin-right: -5px;
`

const HeaderItem = styled.Text`
  padding: 10px;
  font-size: 18px;
  border: 1px solid #000;
  margin-right: 5px;
  margin-left: 5px;
`

const Header = () => {
  const regions = [
    {
      name: "Азия",
      region: "asia",
    },
    {
      name: "Европа",
      region: "europe",
    },
    {
      name: "Африка",
      region: "africa",
    },
    {
      name: "Америка",
      region: "america",
    },
    {
      name: "Австралия",
      region: "oceania",
    }
  ];

  const dispatch = useDispatch()

  const onSetActiveRegion = (region) => {
    dispatch(fetchCountriesByRegion(region));
  }

  return (
    <HeaderView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {regions.map((region) => (
          <TouchableOpacity key={region.region} onPress={() => onSetActiveRegion(region.region)}>
            <HeaderItem>{region.name}</HeaderItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </HeaderView>
  );
}

export default Header