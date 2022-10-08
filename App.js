import React from 'react';
import StackNavigator from './src/navigation/navigation'
import { Provider } from './src/context/DataContext';

export default function App() {
  return (
    <Provider>
      <StackNavigator/>
    </Provider>
  );
}
