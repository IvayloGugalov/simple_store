import * as React from 'react'
import * as api from '@/app/_providers/redux/products/api'
import { Box, Flex, Heading, Section, Text } from '@radix-ui/themes'
import AddToCartButton from '@/app/_components/client-components/AddToCartButton'

async function getProduct(id: string) {
  const res = await api.getProduct(id)

  if (!res.ok) {
    return null
  }

  return res.json()
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const product = await getProduct(id)

  return (
    <Section size={'1'}>
      <Flex
        py={'4'}
        pr={'4'}
        direction={'column'}
        justify={'center'}
        align={'center'}
        style={{ maxWidth: 'fit-content' }}
      >
        <Box>
          {Object.keys(product).map((x) => (
            <div key={`${JSON.stringify(product)} - ${x}`}>
              {x !== 'id' && (
                <Flex align={'center'}>
                  <Heading
                    style={{ textTransform: 'capitalize', width: 'fit-content' }}
                    size='2'
                  >
                    {x}
                  </Heading>
                  <Text>: {product[x as keyof typeof product]}</Text>
                </Flex>
              )}
            </div>
          ))}
        </Box>
        <Box py={'2'}>
          <AddToCartButton product={product} />
        </Box>
      </Flex>
    </Section>
  )
}
