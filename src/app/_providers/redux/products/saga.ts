import { takeEvery, put, takeLatest, call } from 'redux-saga/effects'
import * as Actions from './actions'
import * as api from './api'
import { ActionTypes, SearchProductType } from './types'

function* getProducts() {
  console.log('fetching products...')
  let data = yield call(api.getProducts)
  data = yield data.json()
  console.log('action is called', data)
  yield put(Actions.listProductsSuccess(data))
}

function* searchProducts({ payload }: SearchProductType) {
  let result = yield call(api.searchProduct, payload.query)
  result = yield result.json()
  console.log('action is called', result)
  yield put(Actions.productSearch(result))
}

function* productSaga() {
  yield takeLatest(ActionTypes.listProducts, getProducts)
  yield takeEvery(ActionTypes.searchProduct, searchProducts)
  // yield takeLatest(GET_PRODUCT_DETAILS_REQUEST, getProductDetails)
}

export default productSaga
