'use client'
import * as React from 'react'
import { Button } from '@radix-ui/themes'

import { removeFromCart } from '@_redux/cart/actions'
import { useAppDispatch } from '@_redux/store'
import { type Item } from '@_types/ItemModel'

const RemoveFromCartButton = ({ product }: { product?: Item }) => {
  const dispatch = useAppDispatch()

  if (!product) return <></>

  return (
    <Button
      style={{ cursor: 'pointer' }}
      color='crimson'
      variant='soft'
      onClick={() => dispatch(removeFromCart(product.id))}
    >
      Remove from cart
    </Button>
  )
}

export default RemoveFromCartButton
