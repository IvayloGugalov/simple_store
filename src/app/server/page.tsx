import { Item } from '../_types/ItemModel'
import { Container, Heading } from '@radix-ui/themes'
import ProductsLayout from '../_components/ProductsLayout'

export default async function Page() {
  const productsResponse = await fetch('http://localhost:3500/products', {
    next: { revalidate: 60 },
  })
  if (!productsResponse.ok) {
    return (
      <Container>
        <Heading size={'4'}>No results</Heading>
      </Container>
    )
  }

  const products: Item[] = await productsResponse.json()

  return (
    <div>
      <ProductsLayout products={products} />
    </div>
  )
}
