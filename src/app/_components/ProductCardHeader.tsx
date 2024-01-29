'use client'
import { Heading } from '@radix-ui/themes'
import { useAppSelector } from '../_providers/redux/store'

const ProductCardHeader = ({ productId }: { productId: string }) => {
  const { items: basketItems } = useAppSelector((state) => state.cartData)
  const matchedBasketItem = basketItems.find((x) => x.item.id === productId)

  return <Heading size={'3'}>Count in basket - {matchedBasketItem?.quantity ?? 0}</Heading>
}

export default ProductCardHeader
