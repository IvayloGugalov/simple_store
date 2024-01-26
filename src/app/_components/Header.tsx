'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import * as Form from '@radix-ui/react-form'

import { useAppDispatch, useAppSelector } from '@/app/_providers/redux/store'
import { Box, Button, Flex, Grid, TextField, Text } from '@radix-ui/themes'
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
    <Grid columns={'3'} gap={'3'} width={'100%'} align={'end'}>
      <Box>
        <Link href='/'>
          <h1 className='logo'>E-Comm</h1>
        </Link>
      </Box>

      <Box>
        <Form.Root>
          <Form.Field className='FormField' name='search product'>
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

      <Flex direction={'column'} align={'end'} gap={'4'}>
        <Flex justify={'end'} align={'end'}>
          <Link href='/cart'>
            <Flex gap={'6'} align={'center'} px={'2'}>
              <Flex gap={'2'} align={'center'}>
                <Image width={35} height={35} loader={basketImageLoader} src='basket.png' alt='' />
                <Text as='span' weight={'medium'} size={'4'}>
                  {items.length}
                </Text>
              </Flex>
              <Button
                style={{ cursor: 'pointer' }}
                variant='ghost'
                color='crimson'
                onClick={() => dispatch(emptyCart())}
              >
                Emtpy cart
              </Button>
            </Flex>
          </Link>
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
  )
}

export default Header
