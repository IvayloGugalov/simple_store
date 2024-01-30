import { Container, Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <Container>
      <Flex p={'4'} gap={'8'} wrap={'wrap'}>
        {new Array(10).fill(0).map((_, idx) => (
          <Flex key={idx} direction={'column'}>
            <Skeleton
              highlightColor='#e0e0e0'
              height={'1.25rem'}
              width={'10rem'}
            />
            <Separator mb='2' mt='1' size='4' />
            <Skeleton
              highlightColor='#e0e0e0'
              height={'.75rem'}
              width={'8rem'}
            />
            <Skeleton height={'.75rem'} width={'8rem'} count={2} />
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}
