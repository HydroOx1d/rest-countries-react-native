import { StatusBar, Text, View } from 'react-native';
import styled from 'styled-components/native'
import Home from './screens/Home';
import Details from './screens/Details';

const GlobalWrap = styled.View`
  padding: 15px;
`

export default function App() {
  return (
    <GlobalWrap>
      {/* <Home/> */}
      <Details/>
      <StatusBar theme={'auto'}/>
    </GlobalWrap>
  );
}
