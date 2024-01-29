import { Container, Heading } from '@radix-ui/themes'

import { type Item } from '@_types/ItemModel'
import ProductsLayout from '@_components/ProductsLayout'
import { fetchProducts } from './actions'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products: Item[] | null = await fetchProducts(searchParams?.search)
  if (!products || products.length === 0) {
    return (
      <Container>
        <Heading size={'4'}>No results</Heading>
      </Container>
    )
  }

  return (
    <div>
      <ProductsLayout products={products} />
    </div>
  )
}
