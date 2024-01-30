'use client'
import * as React from 'react'
import { Heading } from '@radix-ui/themes'

import { useAppSelector } from '@_redux/store'

const ProductCardHeader = ({ productId }: { productId: string }) => {
  const [loaded, setLoaded] = React.useState(false)
  const { items: basketItems } = useAppSelector((state) => state.cartData)

  React.useEffect(() => {
    setLoaded(true)
  }, [])

  const matchedBasketItem = basketItems.find((x) => x.item.id === productId)

  return (
    <Heading size={'3'}>
      Count in basket - {loaded ? matchedBasketItem?.quantity ?? 0 : 0}
    </Heading>
  )
}

export default ProductCardHeader
