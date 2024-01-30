'use client'
import * as React from 'react'

import { useAppDispatch, useAppSelector } from '@_redux/store'
import { listProducts } from '@_redux/products/actions'
import ProductsLayout from '../ProductsLayout'

const Main = () => {
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector(
    (state) => state.productsReducer.productsData,
  )

  React.useEffect(() => {
    dispatch(listProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <>Loading...</>

  return <ProductsLayout products={products} />
}

export default Main
