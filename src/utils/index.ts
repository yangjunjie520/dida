export const sortObj = property => {
  return (a, b) => {
    const value1 = a[property]
    const value2 = b[property]
    return value1 - value2
  }
}
