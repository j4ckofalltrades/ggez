const sanitize = (n) => {
  if (Number.isNaN(Number.parseFloat(n)) || n < 0) {
    return 0
  }

  return Math.floor(n)
}

const format = (n) => Number(n.toFixed(2))

const kda = (k, d, a) => format((sanitize(k) + sanitize(a)) / Math.max(sanitize(d), 1))

const df = (k, d, a) => format(2 * sanitize(k) + sanitize(a) - 3 * Math.max(sanitize(d), 1))

const kp = (k, a, tk) => format(((sanitize(k) + sanitize(a)) / sanitize(tk)) * 100)

export { kda, df, kp }
