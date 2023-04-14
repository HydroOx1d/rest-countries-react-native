import { View, Text, ScrollView, Animated, Button } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'
import Search from '../components/search/Search'
import Cards from '../components/cards/Cards'

const Home = () => {
  return (
    <View>
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
          <Cards />
        </View>
      </ScrollView>
      <Animated.View style={{ position: "absolute", bottom: 50, left: 20 }}>
        <Button title="Избранное"/>
      </Animated.View>
    </View>
  );
}

export default Home