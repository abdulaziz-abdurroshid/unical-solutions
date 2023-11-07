const result: Map<boolean, string> = new Map([
  [false, 'NO'],
  [true, 'YES']
])

const isOdd = (number: number) => {
  return number % 2 !== 0
}

const brackets: Map<string, string> = new Map([
  ['{', '}'],
  ['(', ')'],
  ['[', ']'],
]);

const isClosed = (first: string, second: string) => {
  return brackets.get(first) === second
}

const validate = ([...arr]: string) => {

  // is even
  if (isOdd(arr.length)) return result.get(false)

  let output = true
  arr.forEach((item, index) => {
    if (isOdd(index + 1)) {
      output = isClosed(item, arr[index + 1])
    }
  })

  return result.get(output)
}

const examples = ['()', '()[]{}', '(]']
examples.forEach(item => console.log(validate(item)))
