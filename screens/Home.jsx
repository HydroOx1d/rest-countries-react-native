import { View, Text, ScrollView, Animated, Button, StatusBar } from 'react-native'
import React from 'react'
import styled from 'styled-components'

import Header from '../components/header/Header'
import Search from '../components/search/Search'
import Cards from '../components/cards/Cards'

const GlobalWrap = styled.View`
  padding: 15px;
`;

const Home = ({ navigation }) => {
  return (
    <GlobalWrap>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Search />
        </View>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Cards navigation={navigation} />
        </View>
      </ScrollView>
      <Animated.View style={{ position: "absolute", bottom: 50, left: 20 }}>
        <Button title="Избранное" />
      </Animated.View>
      <StatusBar theme={"auto"} />
    </GlobalWrap>
  );
}

export default Home