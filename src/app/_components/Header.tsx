'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import * as Form from '@radix-ui/react-form'

import { useAppDispatch, useAppSelector } from '@/app/_providers/redux/store'
import { Box, Button, Flex, Grid, TextField, Text, Separator } from '@radix-ui/themes'
import { emptyCart } from '../_providers/redux/cart/actions'

const basketImageLoader = () => {
  return 'https://cdn-icons-png.flaticon.com/512/263/263142.png'
}

const Header = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector((state) => state.cartData)

  if (loading) return <></>

  return (
    <>
      <Grid
        columns={'3'}
        gap={'3'}
        py={'4'}
        width={'100%'}
        align={'start'}
      >
        <Box>
          <Link href='/'>
            <h1 className='logo'>E-Comm</h1>
          </Link>
        </Box>

        <Box>
          <Form.Root>
            <Form.Field
              className='FormField'
              name='search product'
            >
              <Form.Control asChild>
                <TextField.Input
                  color='iris'
                  radius='large'
                  size='3'
                  variant='soft'
                  placeholder='Search product…'
                />
              </Form.Control>
            </Form.Field>
          </Form.Root>
        </Box>

        <Flex
          direction={'column'}
          align={'end'}
          gap={'4'}
        >
          <Flex
            justify={'end'}
            align={'end'}
            gap={'4'}
          >
            <Link href='/cart'>
              <Flex
                gap={'2'}
                align={'end'}
              >
                <Text
                  as='label'
                  weight={'medium'}
                  size={'4'}

                >
                  {items.reduce((sum, entry) => sum + entry.quantity, 0)}
                </Text>
                <Image
                  width={25}
                  height={25}
                  loader={basketImageLoader}
                  src='basket.png'
                  alt=''
                />
              </Flex>
            </Link>
            <Button
              style={{ cursor: 'pointer' }}
              variant='ghost'
              color='crimson'
              onClick={() => dispatch(emptyCart())}
            >
              Emtpy cart
            </Button>
          </Flex>
          <Box>
            <Button
              style={{ cursor: 'pointer' }}
              variant='soft'
              onClick={() => router.push(`/?search+product/${Math.floor(Math.random() * 7) + 1}`)}
            >
              View random product
            </Button>
          </Box>
        </Flex>
      </Grid>
      <Separator
        style={{ minWidth: '100%' }}
        size={'2'}
      />
    </>
  )
}

export default Header
