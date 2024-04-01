// App.js
import React from 'react';
import { Provider } from 'react-redux';

// import store from './Bai1/store';
// import ChupAnh from './Bai1/View';

import store from './Bai2/store';
import ChonAnh from './Bai2/View';

const App = () => {
  return (
      // Bai1
    // <Provider store={store}>
    //   <ChupAnh /> 
    // </Provider>


  //   //   Bai2
    <Provider store={store}>
    <ChonAnh />
  </Provider>
  );
};

export default App;