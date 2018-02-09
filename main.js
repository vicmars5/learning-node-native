module.exports = {
  total: (arr) => {
    return arr.reduce((x, el) => {
      x += el
      return x
    }, 0)
  }
}
