import PRODUCTS from '../../data/dummy-data';

const initalState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.id === 'u1')
};

export default (state = initalState, action) => {
  return state
}