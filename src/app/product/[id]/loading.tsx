import { Flex, Section } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
  return (
    <Section size={'1'}>
      <Flex pt='4' direction={'column'}  justify={'center'} >
        <Skeleton height={'.75rem'} width={'8rem'} />
        <Skeleton height={'.75rem'} width={'6.75rem'} />
        <Skeleton height={'.75rem'} width={'7rem'} />
        <Skeleton height={'.75rem'} width={'7.5rem'} />
        <Skeleton height={'.75rem'} width={'7.5rem'} />
        <Skeleton style={{ marginLeft: '1.5rem'}} height={'1.5rem'} width={'5rem'} count={1} />
      </Flex>
    </Section>
  )
}

export default Loading
