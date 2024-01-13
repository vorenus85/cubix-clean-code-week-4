// TODO Improve both cyclomatic complexity and maintainability index

function validateUserInput(input: string): boolean {
  if (input.trim() !== '') {
    if (input.length >= 5 && input.length <= 20) {
      if (/^[a-zA-Z0-9]+$/.test(input)) {
        return true
      }
    }
  }
  return false
}
