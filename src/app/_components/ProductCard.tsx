import Link from 'next/link'
import { Box, Heading, Separator } from '@radix-ui/themes'
import { numberFormatByThousands } from '../_lib/utils'
import AddToCartButton from './client-components/AddToCartButton'
import { Item } from '../_types/ItemModel'
import ProductCardHeader from './ProductCardHeader'

const ProductCard = ({ product }: { product: Item }) => {
  return (
    <Box p={'4'}>
      <ProductCardHeader productId={product.id} />
      <Separator mb='2' mt='1' size='4' />
      <Link href={`product/${product.id}`}>
        <Heading size={'2'} style={{ textTransform: 'capitalize' }}>
          {product.name}
        </Heading>
      </Link>
      <p>Category: {product.category}</p>
      <p>Price: ${numberFormatByThousands(product.price)}</p>
      <Box py={'2'}>
        <AddToCartButton product={product} />
      </Box>
    </Box>
  )
}

export default ProductCard
