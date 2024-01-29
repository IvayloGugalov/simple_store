import {
  ActionTypes,
  Actions,
  AddToCartType,
  DefaultCartDataStateType,
  RemoveItemFromCartType,
} from './types'

const defaultCartData: DefaultCartDataStateType = {
  items:
    typeof window !== 'undefined'
      ? JSON.parse(window?.localStorage.getItem('cart-items') ?? '[]')
      : [],
  loading: false,
  error: undefined,
}

export const cartData = (
  state = defaultCartData,
  action: Actions,
): DefaultCartDataStateType => {
  switch (action.type) {
    case ActionTypes.addToCart:
      console.log('ADD_TO_CART condition ', action)
      const itemToAdd = (action as AddToCartType).payload.data
      const existingItemIndex = state.items.findIndex(
        (entry) => entry.item.id === itemToAdd.id,
      )

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          item: state.items[existingItemIndex].item,
          quantity: state.items[existingItemIndex].quantity + 1,
        }

        window?.localStorage.setItem('cart-items', JSON.stringify(updatedItems))
        return {
          ...state,
          items: updatedItems,
        }
      }

      const updatedItems = [
        {
          item: itemToAdd,
          quantity: 1,
        },
        ...state.items,
      ]

      window?.localStorage.setItem('cart-items', JSON.stringify(updatedItems))
      return {
        ...state,
        items: updatedItems,
      }
    case ActionTypes.removeItemFromCart:
      console.log('REMOVE_FROM_CART condition ', action)
      const indexToRemove = state.items.findIndex(
        (entry) =>
          entry.item.id === (action as RemoveItemFromCartType).payload?.id,
      )

      if (indexToRemove !== -1) {
        const updatedItems = [...state.items]
        const itemToUpdate = state.items[indexToRemove]

        if (itemToUpdate.quantity - 1 === 0) {
          updatedItems.splice(indexToRemove, 1)
        } else {
          updatedItems[indexToRemove] = {
            ...itemToUpdate,
            quantity: itemToUpdate.quantity - 1,
          }
        }

        window?.localStorage.setItem('cart-items', JSON.stringify(updatedItems))
        return {
          ...state,
          items: updatedItems,
        }
      }

      return state
    case ActionTypes.emtpyCart:
      console.log('EMPTY CART condition ', action)
      window?.localStorage.removeItem('cart-items')
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}
