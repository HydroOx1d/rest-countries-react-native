import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

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
  const [activeRegion, setActiveRegion] = React.useState({});

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

  const onSetActiveRegion = (region) => {
    setActiveRegion(region);
  }

  return (
    <HeaderView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {regions.map((region) => (
          <TouchableOpacity key={region.region} onPress={() => onSetActiveRegion(region)}>
            <HeaderItem>{region.name}</HeaderItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </HeaderView>
  );
}

export default Header