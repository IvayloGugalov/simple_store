import { put, takeLatest, call, delay } from 'redux-saga/effects'

import * as Actions from './actions'
import * as api from './api'
import { ActionTypes, SearchProductType } from './types'

function* getProducts() {
  console.log('fetching products...')
  let data: Response = yield call(api.getProducts)
  data = yield data.json()
  console.log('action is called', data)
  yield put(Actions.listProductsSuccess(data))
}

function* searchProducts({ payload }: SearchProductType) {
  yield delay(500)
  let result: Response = yield call(api.searchProduct, payload.query)
  result = yield result.json()
  console.log('action is called', result)
  yield put(Actions.listProductsSuccess(result))
}

function* productSaga() {
  yield takeLatest(ActionTypes.listProducts, getProducts)
  yield takeLatest(ActionTypes.searchProduct, searchProducts)
  // yield takeLatest(GET_PRODUCT_DETAILS_REQUEST, getProductDetails)
}

export default productSaga
