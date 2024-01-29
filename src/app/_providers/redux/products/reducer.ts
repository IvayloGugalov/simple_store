import { combineReducers } from 'redux'
import {
  ActionTypes,
  Actions,
  DefaultProductsDataStateType,
  ListProductsSuccessType,
} from './types'

const defaultProductsData: DefaultProductsDataStateType = {
  products: [],
  loading: false,
  error: undefined,
}

export const productsData = (
  state = defaultProductsData,
  action: Actions,
): DefaultProductsDataStateType => {
  switch (action.type) {
    case ActionTypes.listProducts:
      return {
        ...state,
        loading: true,
      }

    case ActionTypes.listProductsSuccess:
      console.log('PRODUCT_LIST condition ', action)
      const products = (action as ListProductsSuccessType).payload.data
      return {
        loading: false,
        products: [...products],
      }

    default:
      return state
  }
}

const defaultProductState = null

export const product = (state = defaultProductState, action: Actions) => {
  switch (action.type) {
    // case GET_PRODUCT_DETAILS_SUCCESS:
    //   return action.data
    // case GET_PRODUCT_DETAILS_FAILURE:
    //   return null
    default:
      return state
  }
}

const productsReducer = combineReducers({ productsData, product })
export { productsReducer }
