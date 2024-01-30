'use client'
import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import * as Form from '@radix-ui/react-form'
import {
  Box,
  Button,
  Flex,
  Grid,
  TextField,
  Text,
  Separator,
} from '@radix-ui/themes'

import { useAppDispatch, useAppSelector } from '@_redux/store'
import { emptyCart } from '@_redux/cart/actions'
import { productSearch } from '@_redux/products/actions'

const basketImageLoader = () => {
  return 'https://cdn-icons-png.flaticon.com/512/263/263142.png'
}

const Header = () => {
  const router = useRouter()
  const pathName = usePathname()
  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector((state) => state.cartData)
  const [pathQuery, setPathQuery] = React.useState('')
  // Instead of using supressHydrationWarning as it doesn't stream back the actual items quantity after load
  const [loadHeader, setLoadHeader] = React.useState(false)

  React.useEffect(() => {
    setLoadHeader(true)
  }, [])

  React.useEffect(() => {
    const current = new URLSearchParams()
    const searchKey = 'search'
    if (pathQuery) {
      current.set(searchKey, pathQuery)
    } else {
      current.delete(searchKey)
    }

    router.push(`?${current.toString()}`)
  }, [pathQuery])

  if (loading) return <>Loading</>

  return (
    <>
      <Grid columns={'3'} gap={'3'} py={'4'} width={'100%'} align={'center'}>
        <Box>
          <Link href='/'>
            <h1 className='logo'>E-Comm</h1>
          </Link>
          <Flex
            px={'4'}
            gap={'4'}
            width={'100%'}
            style={{ justifyContent: 'space-around' }}>
            <Link href={'client'}>
              <Text>Client Fetch</Text>
            </Link>
            <Link href={'server'}>
              <Text>Server Fetch</Text>
            </Link>
          </Flex>
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
                  onChange={(e) => {
                    const searchQuery = e.target.value
                    if (pathName === '/server') {
                      setPathQuery(searchQuery)
                    } else {
                      dispatch(productSearch(searchQuery))
                    }
                  }}
                />
              </Form.Control>
            </Form.Field>
          </Form.Root>
        </Box>

        <Flex direction={'column'} align={'end'} gap={'4'}>
          <Flex justify={'end'} align={'end'} gap={'4'}>
            <Link href='/cart'>
              <Flex gap={'2'} align={'end'}>
                <Text as='label' weight={'medium'} size={'4'}>
                  {loadHeader ? items.reduce((sum, entry) => sum + entry.quantity, 0) : 0}
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
              onClick={() => dispatch(emptyCart())}>
              Emtpy cart
            </Button>
          </Flex>
          <Box>
            <Button
              style={{ cursor: 'pointer' }}
              variant='soft'
              onClick={() =>
                router.push(`/product/${Math.floor(Math.random() * 7) + 1}`)
              }>
              View random product
            </Button>
          </Box>
        </Flex>
      </Grid>
      <Separator style={{ minWidth: '100%' }} size={'2'} />
    </>
  )
}

export default Header
