import { combineReducers } from 'redux'
import { cartData } from './cart/reducer'
import { productsReducer } from './products/reducer'

export default combineReducers({
  cartData,
  productsReducer,
})
