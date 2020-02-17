import { Sum, AddList, ContainsString, DivideBy, ReSortedNumbers } from './MyMath.js'

describe("Sum", () => {
  test('Whether undefined is returned on invalid type', () => {
    expect(Sum(1, "Test")).toBeUndefined()
  })
  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })
  test('produces the sum of 10 + 20, whcih should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })
})

describe ("DivideBy", () => {

  test('dividing 4 by 2 is 2', () => {
    expect(DivideBy(4, 2)).toBe(2)
  })

  test('dividing by zero', () => {
    expect(DivideBy(4, 0)).toBeUndefined()
  })

})

describe ("sorting", () => {

  test('checking to see if numbers are sorted', () => {
    expect(ReSortedNumbers(4, 2, 3)).toEqual(2,3,4)
  })

})

describe("AddList", () => {
  test('returns undefined when array is empty', () => {
    let stuff = []
    expect(AddList(stuff)).toBeUndefined()
  })
  test('returns undefined when array is not all numbers', () => {
    let stuff = [1, 'c', 'beep', 12]
    expect(AddList(stuff)).toBeUndefined()
  })
  test('returns undefined when array is not an array', () => {
    let stuff = "beep"
    expect(AddList(stuff)).toBeUndefined()
  })
  test('returns 6 when list has 1, 2, and 3', () => {
    let stuff = [1, 2, 3]
    expect(AddList(stuff)).toBe(6)
  })
})
describe("ContainsString", () => {
  test('returns true when first is beep and second is eep', () => {
    expect(ContainsString("beep","eep")).toBe(true)
  })
  test('returns false when first string does not contain second string', () => {
    expect(ContainsString("beep","boop")).toBe(false)
  })
  test('returns false when first string is not a string', () => {
    expect(ContainsString(7,"boop")).toBe(false)
  })
  test('returns false when second string is not a string', () => {
    expect(ContainsString("beep",7)).toBe(false)
  })
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
