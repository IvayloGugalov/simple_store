'use client'
import * as React from 'react'
import { Button } from '@radix-ui/themes'
import { useAppDispatch } from '../../_providers/redux/store'
import { Item } from '../../_types/ItemModel'
import { addToCart } from '../../_providers/redux/cart/actions'

const AddToCartButton = ({ product, title }: { product?: Item, title?: string }) => {
  const dispatch = useAppDispatch()

  if (!product) return <></>

  return (
    <Button
      style={{ cursor: 'pointer' }}
      variant='ghost'
      onClick={() => dispatch(addToCart(product))}
    >
      {title ?? 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
