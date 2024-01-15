// TODO Improve both cyclomatic complexity and maintainability index

function validateUserInput(input: string): boolean {
  const regex = /^[a-zA-Z0-9]{5,20}$/
  return regex.test(input)
}

export default validateUserInput
