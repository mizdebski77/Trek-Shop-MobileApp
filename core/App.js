import { StatusBar } from 'react-native';
import { Wrapper } from './styledApp';
import { Navigation } from '../common/Navigation/navigation';
import { Home } from '../features/Home/home';

export default function App() {
  return (
    <Wrapper>
      <StatusBar backgroundColor='#475228' />
      <Navigation />
      <Home />
    </Wrapper>
  );
}