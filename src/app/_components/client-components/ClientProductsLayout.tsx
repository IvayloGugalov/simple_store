'use client'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/_providers/redux/store'
import { listProducts } from '../../_providers/redux/products/actions'
import ProductsLayout from '../ProductsLayout'

const Main = () => {
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector((state) => state.productsReducer.productsData)

  React.useEffect(() => {
    dispatch(listProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <></>

  return <ProductsLayout products={products} />
}

export default Main
