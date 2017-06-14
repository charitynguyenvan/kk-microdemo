export const addMethod = (eventMessage) => {
  const {a, b} = eventMessage
  const sum = parseInt(a) + parseInt(b)
  return { sum }
}
