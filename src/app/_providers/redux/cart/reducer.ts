import {
  ActionTypes,
  Actions,
  AddToCartType,
  DefaultCartDataStateType,
  RemoveItemFromCartType,
} from './types'

const defaultCartData: DefaultCartDataStateType = {
  items: [],
  loading: false,
  error: undefined,
}

export const cartData = (
  state = defaultCartData,
  action: Actions
): DefaultCartDataStateType => {
  switch (action.type) {
    case ActionTypes.addToCart:
      console.log('ADD_TO_CART condition ', action)
      const itemToAdd = (action as AddToCartType).payload.data
      return {
        ...state,
        items: [itemToAdd, ...state.items],
      }
    case ActionTypes.removeItemFromCart:
      console.log('REMOVE_FROM_CART condition ', action)
      const indexToRemove = state.items.findIndex(
        (item) => item.id === (action as RemoveItemFromCartType).payload?.id
      )

      if (indexToRemove !== -1) {
        const newData = [...state.items]
        newData.splice(indexToRemove, 1)
        return {
          ...state,
          items: newData,
        }
      }
      return state
    case ActionTypes.emtpyCart:
      console.log('EMPTY CART condition ', action)
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}
