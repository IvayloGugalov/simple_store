'use server'
import { type Item } from '@_types/ItemModel'

export async function fetchProducts(searchQuery?: string | string[]) {
  const response = await fetch('http://localhost:3500/products', {
    next: { revalidate: 60 },
  })
  if (!response.ok) return null
  if (searchQuery && typeof searchQuery === 'string') {
    // return await fetch(`http://localhost:3500/products?q=${searchParams.search}`)
    const filteredData = ((await response.json()) as Item[]).filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    return filteredData
  } else {
    return await response.json()
  }
}
