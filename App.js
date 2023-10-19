import { StatusBar } from 'react-native';
import { Home } from './features/Home/home';
import { Wrapper } from './styledApp';
import { useState } from 'react';

export default function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <Wrapper>
      <StatusBar hidden={hidden} />
      <Home />
    </Wrapper>
  );
}