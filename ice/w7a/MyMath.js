function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a+b
  }
  return result
}

function AddList (numbers) {
  let result = undefined
  const areNumbers = (currentValue) => typeof currentValue == "number"
  if(numbers.length != 0 && Array.isArray(numbers) && numbers.every(areNumbers)) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
    }
    result = sum
  }
  return result
}

function ContainsString (first, second) {
  //Returns true if the first parameter has as a substring the second parameter, both of which must be strings.
  let result = false
  if (typeof first == "string" && typeof second == "string") {
    if (first.includes(second)) {
      result = true
    }
  }
  return result
}


export { Sum };
export { AddList };
export { ContainsString };