import { Container, Flex } from '@radix-ui/themes'

import { type Item } from '@_types/ItemModel'
import ProductCard from './ProductCard'

const ProductsLayout = ({ products }: { products?: Item[] }) => {
  return (
    <Container>
      <Flex gap={'8'} wrap={'wrap'}>
        {products?.map((product) => (
          <ProductCard key={JSON.stringify(product)} product={product} />
        ))}
      </Flex>
    </Container>
  )
}

export default ProductsLayout
