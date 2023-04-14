import { StatusBar, Text, View } from 'react-native';
import styled from 'styled-components/native'
import Home from './screens/Home';

const GlobalWrap = styled.View`
  padding: 15px;
`

export default function App() {
  return (
    <GlobalWrap>
      <Home/>
      <StatusBar theme={'auto'}/>
    </GlobalWrap>
  );
}
