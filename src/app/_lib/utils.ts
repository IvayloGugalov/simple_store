export const numberFormatByThousands = (number: number) => (
  number.toLocaleString('en-US', { minimumFractionDigits: 2 })
)
