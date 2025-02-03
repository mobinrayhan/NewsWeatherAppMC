import React from 'react';
import {Provider} from 'react-redux';
import NavContainer from './src/navigation/NavContainer';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
};

export default App;
