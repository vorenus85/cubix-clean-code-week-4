import processUserData from '../src/processUserData'

describe('processUserData tests:', () => {
  test('User found in array with findUser and logProcessing true', () => {
    const result = processUserData(
      true,
      ['string1', 'someString', 'string3'],
      true,
      'someString'
    )
    expect(result).toBe('User found: someString at index 1')
  })

  test('Processing with findUser false and logProcessing true', () => {
    const result = processUserData(
      false,
      ['string1', 'someString', 'string3'],
      true,
      'someString'
    )
    expect(result).toBe('Processing... Processing... Processing... ')
  })

  test('No action taken with findUser and logProcessing false', () => {
    const result = processUserData(
      false,
      ['string1', 'someString', 'string3'],
      false,
      'someString'
    )
    expect(result).toBe('No action taken.')
  })

  test('No action taken with findUser true and logProcessing false', () => {
    const result = processUserData(
      true,
      ['string1', 'someString', 'string3'],
      false,
      'someString'
    )
    expect(result).toBe('No action taken.')
  })

  test('User found scenario', () => {
    const result = processUserData(
      true,
      ['John', 'Jane', 'example'],
      true,
      'example'
    )
    expect(result).toBe('User found: example at index 2')
  })

  test('Processing scenario', () => {
    const result = processUserData(
      false,
      ['John', 'Jane', 'example'],
      true,
      'other'
    )
    expect(result).toBe('Processing... Processing... Processing... ')
  })

  test('No action taken scenario', () => {
    const result = processUserData(
      false,
      ['John', 'Jane', 'example'],
      false,
      'other'
    )
    expect(result).toBe('No action taken.')
  })

  test('No action taken scenario - default values', () => {
    const result = processUserData(false, [], false, '')
    expect(result).toBe('No action taken.')
  })

  test('User found in array', () => {
    const result = processUserData(
      true,
      ['John', 'Jane', 'name', 'Doe'],
      true,
      'name'
    )
    expect(result).toBe('User found: name at index 2')
  })

  test('User not found in array', () => {
    const result = processUserData(true, ['John', 'Jane', 'Doe'], true, 'name')
    expect(result).toBe('')
  })

  test('No action taken', () => {
    const result = processUserData(
      false,
      ['John', 'Jane', 'Doe'],
      false,
      'name'
    )
    expect(result).toBe('No action taken.')
  })

  test('Edge case - empty array', () => {
    const result = processUserData(true, [], true, 'name')
    expect(result).toBe('')
  })
})
