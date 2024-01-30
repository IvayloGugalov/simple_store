import { type Item } from '@_types/ItemModel'

export const ActionTypes = {
  addToCart: 'cart/ADD_TO_CART',
  emtpyCart: 'cart/EMPTY_CART',
  removeItemFromCart: 'cart/REMOVE_ITEM_FROM_CART',
}

export type AddToCartType = {
  type: typeof ActionTypes.addToCart
  payload: {
    data: Item
  }
}

export type EmptyCartType = {
  type: typeof ActionTypes.emtpyCart
  payload: null
}

export type RemoveItemFromCartType = {
  type: typeof ActionTypes.removeItemFromCart
  payload: {
    id: string
  }
}

export type DefaultCartDataStateType = {
  items: { item: Item; quantity: number }[]
  error?: string
}

export type Actions = AddToCartType | EmptyCartType | RemoveItemFromCartType
