import { Container } from 'unstated';

type WarehouseState = {
  itemCount: number
};

export default class WarehouseStore extends Container<WarehouseState> {
  state = {
    itemCount: 5
  };

  async addStock(count: number) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await this.setState({ itemCount: this.state.itemCount + count });
        resolve(true);
      }, 50);
    });
  }

  async removeStock(count: number) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (this.state.itemCount <= 0) {
          reject();
        } else {
          await this.setState({ itemCount: this.state.itemCount - count });
          resolve(true);
        }
      }, 50);
    });
  }
}
