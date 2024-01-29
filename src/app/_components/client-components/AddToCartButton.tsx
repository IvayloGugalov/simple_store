'use client'
import * as React from 'react'
import { Button } from '@radix-ui/themes'

import { type Item } from '@_types/ItemModel'
import { useAppDispatch } from '@_redux/store'
import { addToCart } from '@_redux/cart/actions'

const AddToCartButton = ({
  product,
  title,
}: {
  product?: Item
  title?: string
}) => {
  const dispatch = useAppDispatch()

  if (!product) return <></>

  return (
    <Button
      style={{ cursor: 'pointer' }}
      variant='soft'
      onClick={() => dispatch(addToCart(product))}>
      {title ?? 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
