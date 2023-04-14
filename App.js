import Navigation from './screens/Navigation';
import { store } from './store/index'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
