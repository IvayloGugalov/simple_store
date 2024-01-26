import { ActionTypes, ListProductsSuccessType, ListProductsType, SearchProductType } from './types'

export const listProducts = (): ListProductsType => ({
  type: ActionTypes.listProducts,
  payload: null,
})

export const listProductsSuccess = (products: any): ListProductsSuccessType => ({
  type: ActionTypes.listProductsSuccess,
  payload: {
    data: products
  },
})

export const productSearch = (query: string): SearchProductType => ({
  type: ActionTypes.searchProduct,
  payload: {
    query,
  },
})

// export const getProductDetails = (productId) => ({
//   type: GET_PRODUCT_DETAILS_REQUEST,
//   payload: {
//     productId,
//   },
// })

// export const getProductDetailsSuccess = (productDetails) => ({
//   type: GET_PRODUCT_DETAILS_SUCCESS,
//   payload: productDetails,
// })

// export const getProductDetailsFailure = (error) => ({
//   type: GET_PRODUCT_DETAILS_FAILURE,
//   payload: error,
// })

