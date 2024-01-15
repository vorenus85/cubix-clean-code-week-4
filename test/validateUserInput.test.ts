import validateUserInput from '../src/validateUserInput'

describe('Validate user input', () => {
  describe('Happy paths', () => {
    it.each`
      testDescription                                                 | input                     | expected
      ${'should valid input - alphanumeric, length between 5 and 20'} | ${'Abcd123'}              | ${true}
      ${'should valid input - alphanumeric, length 5'}                | ${'Abc12'}                | ${true}
      ${'should valid input - alphanumeric, length 20'}               | ${'Abcdefghijklmnopqrst'} | ${true}
    `('$testDescription', ({ input, expected }) => {
      // Act
      const actualResult = validateUserInput(input)

      // Assert
      expect(actualResult).toBe(expected)
    })
  })

  describe('Error paths', () => {
    it.each`
      testDescription                                          | input                            | expected
      ${'should Invalid input - contains a special character'} | ${'Abc@123'}                     | ${false}
      ${'should Invalid input - length less than 5'}           | ${'Abc'}                         | ${false}
      ${'should Invalid input - length more than 20'}          | ${'Abcdefghijklmnopqrstuvwxyz1'} | ${false}
      ${'should Invalid input - empty string'}                 | ${''}                            | ${false}
      ${'should Invalid input - whitespace only'}              | ${'    '}                        | ${false}
    `('$testDescription', ({ testDescription, input, expected }) => {
      // Act
      const actualResult = validateUserInput(input)

      // Assert
      expect(actualResult).toBe(expected)
    })
  })
})
