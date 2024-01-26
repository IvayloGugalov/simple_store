import { Box, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import React from 'react'

const NotFound = () => {
  return (
    <Box style={{ height: 'calc(100vh - 12rem' }} m={'auto'}>
      <Flex
        justify={'center'}
        align={'center'}
        gap={'4'}
        width={'100%'}
        height={'100%'}
      >
        <Heading>404</Heading>
        <Separator style={{ backgroundColor: 'black', height: '2rem' }} orientation='vertical' />
        <Text>This page could not be found.</Text>
      </Flex>
    </Box>
  )
}

export default NotFound
