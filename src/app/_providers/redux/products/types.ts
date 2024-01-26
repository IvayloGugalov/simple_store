import { Item } from "@/app/_types/ItemModel"

export const ActionTypes = {
  listProducts: 'product/PRODUCTS_LIST',
  listProductsSuccess: 'product/SET_PRODUCTS_LIST',
  searchProduct: 'product/SEARCH_PRODUCT',
}

export type ListProductsType = {
  type: typeof ActionTypes.listProducts
  payload: null
}

export type ListProductsSuccessType = {
  type: typeof ActionTypes.listProductsSuccess
  payload: {
    data: any
  }
}

export type SearchProductType = {
  type: typeof ActionTypes.searchProduct
  payload: {
    query: string
  }
}

export type DefaultProductsDataStateType = {
  products: Item[]
  loading: boolean
  error?: string
}

export type Actions = ListProductsType | ListProductsSuccessType | SearchProductType
