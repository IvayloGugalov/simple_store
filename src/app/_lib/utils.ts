export const numberFormatByThousands = (number: number) => (
  number.toLocaleString(navigator.language, { minimumFractionDigits: 2 })
)