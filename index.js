module.exports = input => input
  .trim()
  .split('\n')
  .map(x => x.trim())
  .filter(x => !(x[0].match(/[a-z]|#/i)))
  .map(x => {
    const [r, g, b, name] = x.split(/[ |\t]+/g)
    return {
      name,
      r: Number(r),
      g: Number(g),
      b: Number(b),
    }
  })
