import React from 'react';
import { Provider } from 'unstated';

import Warehouse from '../warehouse/Warehouse';
import Seller from '../seller/Seller';
import { Container } from '../common/container';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Container>
          <Seller name="Amazon" />
          <Warehouse />
          <Seller name="Ebay" />
        </Container>
      </Provider>
    );
  }
}

export default App;
