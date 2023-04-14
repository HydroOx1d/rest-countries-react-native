import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';

const SearchView = styled.View`
  flex-direction: row;
`

const SearchInput = styled.TextInput`
  width: 250px;
  height: 40px;
  border-width: 1px;
  padding: 10px;
  margin-right: 10px;
`

const SearchButton = styled.Text`
  flex: 1;
  border-width: 1px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
`

const Search = () => {
  const [value, setValue] = React.useState("")

  return (
    <SearchView>
      <SearchInput
        placeholder="Введите страну"
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity style={{
        flex: 1,
        width: 100
      }}>
        <SearchButton>Поиск</SearchButton>
      </TouchableOpacity>
    </SearchView>
  );
}

export default Search