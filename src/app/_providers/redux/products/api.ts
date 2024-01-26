export const getProducts = () =>
  fetch('http://localhost:3500/products').then((res) => res)

export const searchProduct = (query: string) =>
  fetch(`http://localhost:3500/products?q=${query}`).then((res) => res)

export const getProduct = (id: string) =>
  fetch(`http://localhost:3500/products/${id}`).then((res) => res)
