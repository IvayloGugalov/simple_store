'use client'

import * as React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/_providers/redux/store'
import { listProducts } from '../_providers/redux/products/actions'
import { addToCart, emptyCart, removeFromCart } from '../_providers/redux/cart/actions'
import { Box, Container, Flex, Text, Heading, Separator, Button } from '@radix-ui/themes'

const Main = () => {
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector((state) => state.productsReducer.productsData)
  const { items } = useAppSelector((state) => state.cartData)

  React.useEffect(() => {
    console.log('fetching data')
    dispatch(listProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <></>

  return (
    <Container>
      <Flex gap={'8'} wrap={'wrap'}>
        {products.map((product) => (
          <Box p={'4'} key={product.id}>
            <Heading size={'3'}>
              Count in basket - {items.filter((x) => x.id === product.id).length}
            </Heading>
            <Separator mb='2' mt='1' size='4' />
            {Object.keys(product).map((x) => (
              <>
                {x !== 'id' && (
                  <Flex key={`${JSON.stringify(product)} - ${x}`}>
                    <Heading style={{ textTransform: 'capitalize', width: 'fit-content' }} size='2'>
                      {x}
                    </Heading>
                    <Text>: {product[x]}</Text>
                  </Flex>
                )}
              </>
            ))}
            <Flex gap={'4'} py={'2'}>
              <Button variant='ghost' onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </Button>
              <Button color='crimson' variant='ghost' onClick={() => dispatch(removeFromCart(product.id))}>
                Remove from cart
              </Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default Main
