'use client'

import { Box, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'
import { useAppSelector } from '../_providers/redux/store'
import { numberFormatByThousands } from '../_lib/utils'
import RemoveFromCartButton from '../_components/client-components/RemoveFromCartButton'
import AddToCartButton from '../_components/client-components/AddToCartButton'

const Page = () => {
  const { items } = useAppSelector((state) => state.cartData)

  if (items.length === 0) {
    return (
      <Section>
        <Box
          style={{ maxWidth: 'fit-content' }}
          m={'auto'}
        >
          <Heading>Your Cart is empty!</Heading>
        </Box>
      </Section>
    )
  }

  return (
    <Section size={'1'}>
      <Box py={'4'}>
        <Heading>Your Cart</Heading>
      </Box>
      <ul>
        {items.map(({ item, quantity }) => (
          <>
            {Object.keys(item).map((x) => (
              <div key={`${JSON.stringify(item)} - ${x}`}>
                {x !== 'id' && (
                  <Flex align={'center'}>
                    <Heading
                      style={{ textTransform: 'capitalize', width: 'fit-content' }}
                      size='2'
                    >
                      {x}
                    </Heading>
                    <Text>: {item[x as keyof typeof item]}</Text>
                  </Flex>
                )}
              </div>
            ))}
            <Text>Quantity: {quantity}</Text>
            <Flex
              gap={'4'}
              py={'2'}
            >
              <AddToCartButton title='Add 1 more' product={item} />
              <RemoveFromCartButton product={item} />
            </Flex>
          </>
        ))}
      </ul>
      <Flex
        p={'2'}
        justify={'end'}
      >
        <Heading>
          Total: ${numberFormatByThousands(items.reduce((sum, entry) => sum + entry.quantity * entry.item.price, 0))}
        </Heading>
      </Flex>
    </Section>
  )
}

export default Page
