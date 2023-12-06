import test from "ava"
import { kda, df, kp } from "./index.js"

test("kda", (t) => {
  const actual = kda(6, 2, 5)
  const expected = 5.5
  t.deepEqual(actual, expected)
})

test("df", (t) => {
  const actual = df(2, 6, 8)
  const expected = -6
  t.deepEqual(actual, expected)
})

test("kp", (t) => {
  const actual = kp(4, 2, 17)
  const expected = 35.29
  t.deepEqual(actual, expected)
})
