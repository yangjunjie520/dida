export const handlePercentage = (val: string) => {
  let percentage = (parseFloat(val) * 100).toFixed(2)
  return `${percentage}%`
}
