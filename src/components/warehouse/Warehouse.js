import React from 'react';
import { Subscribe } from 'unstated';

import { ContainerItem } from '../common/container';
import WarehouseStore from '../../stores/warehouse-store';
import { Button } from '../common/button';

class Warehouse extends React.Component {
  render() {
    return (
      <Subscribe to={[WarehouseStore]}>
        {warehouseStore => (
          <ContainerItem>
            <h1>Warehouse</h1>
            <h5>{warehouseStore.state.itemCount} items in stock</h5>
            <Button onClick={() => warehouseStore.addStock(10)}>
              Accept delivery
            </Button>
          </ContainerItem>
        )}
      </Subscribe>
    );
  }
}

export default Warehouse;
