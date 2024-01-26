'use client'

import * as React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/_providers/redux/store'
import { listProducts } from '../_providers/redux/products/actions'
import { Box, Container, Flex, Heading, Separator } from '@radix-ui/themes'
import AddToCartButton from './client-components/AddToCartButton'
import RemoveFromCartButton from './client-components/RemoveFromCartButton'
import { numberFormatByThousands } from '../_lib/utils'

const Main = () => {
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector((state) => state.productsReducer.productsData)
  const { items } = useAppSelector((state) => state.cartData)

  React.useEffect(() => {
    dispatch(listProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <></>

  return (
    <Container>
      <Flex
        gap={'8'}
        wrap={'wrap'}
      >
        {products.map((product) => (
          <Box
            p={'4'}
            key={JSON.stringify(product)}
          >
            <Heading size={'3'}>Count in basket - {items.find((x) => x.item.id === product.id)?.quantity ?? 0}</Heading>
            <Separator
              mb='2'
              mt='1'
              size='4'
            />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${numberFormatByThousands(product.price)}</p>
            <Flex
              gap={'4'}
              py={'2'}
            >
              <AddToCartButton product={product} />
              <RemoveFromCartButton product={product} />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default Main
