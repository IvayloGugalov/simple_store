import { Item } from '@/app/_types/ItemModel'
import { ActionTypes, AddToCartType, EmptyCartType, RemoveItemFromCartType } from './types'

export const addToCart = (item: Item): AddToCartType => {
  console.log('action is called', item)
  return {
    type: ActionTypes.addToCart,
    payload: {
      data: item,
    },
  }
}

export const removeFromCart = (id: string): RemoveItemFromCartType => {
  console.log('action removeFromCart', id)
  return {
    type: ActionTypes.removeItemFromCart,
    payload: {
      id,
    },
  }
}

export const emptyCart = (): EmptyCartType => {
  console.log('action emptyCart')
  return {
    type: ActionTypes.emtpyCart,
    payload: null,
  }
}
