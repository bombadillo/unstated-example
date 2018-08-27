import React from 'react';
import { Subscribe } from 'unstated';

import { ContainerItem } from '../common/container';
import { Button } from '../common/button';
import WarehouseStore from '../../stores/warehouse-store';

class Seller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localStockCount: 0
    };
  }

  addStockFromWarehouse = async warehouseStore => {
    const warehouseUpdated = await warehouseStore
      .removeStock(1)
      .catch(error => {
        console.log('Failed to update warehouse stock count');
      });

    if (warehouseUpdated) {
      this.setState({ localStockCount: this.state.localStockCount + 1 });
    }
  };

  returnStockToWarehouse = async warehouseStore => {
    if (this.state.localStockCount <= 0) {
      return;
    }

    const warehouseUpdated = await warehouseStore.addStock(1).catch(error => {
      console.log('Failed to update warehouse stock count');
    });

    if (warehouseUpdated) {
      this.setState({ localStockCount: this.state.localStockCount - 1 });
    }
  };

  render() {
    return (
      <Subscribe to={[WarehouseStore]}>
        {warehouseStore => (
          <ContainerItem>
            <h1>{this.props.name} Seller</h1>

            <h5>{warehouseStore.state.itemCount} items in warehouse</h5>
            {warehouseStore.state.itemCount > 0 && (
              <Button
                onClick={() => this.addStockFromWarehouse(warehouseStore)}
              >
                Add stock
              </Button>
            )}

            <h5>{this.state.localStockCount} items in local stock</h5>
            {this.state.localStockCount > 0 && (
              <Button
                onClick={() => this.returnStockToWarehouse(warehouseStore)}
              >
                Return stock
              </Button>
            )}
          </ContainerItem>
        )}
      </Subscribe>
    );
  }
}

export default Seller;
