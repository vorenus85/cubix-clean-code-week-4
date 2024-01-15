import processUserData from '../src/processUserData'

// Test case 1: User found with matching string in the array
test('User found in array with findUser and logProcessing true', () => {
  const result = processUserData(
    true,
    ['string1', 'someString', 'string3'],
    true,
    'someString',
    0
  )
  expect(result).toBe('User found: someString at index 1')
})

// Test case 3: Processing with findUser false and logProcessing true
test('Processing with findUser false and logProcessing true', () => {
  const result = processUserData(
    false,
    ['string1', 'someString', 'string3'],
    true,
    'someString',
    3
  )
  expect(result).toBe('Processing... Processing... Processing... ')
})

// Test case 4: No action taken with findUser and logProcessing false
test('No action taken with findUser and logProcessing false', () => {
  const result = processUserData(
    false,
    ['string1', 'someString', 'string3'],
    false,
    'someString',
    0
  )
  expect(result).toBe('No action taken.')
})

// Test case 5: No action taken with findUser true and logProcessing false
test('No action taken with findUser true and logProcessing false', () => {
  const result = processUserData(
    true,
    ['string1', 'someString', 'string3'],
    false,
    'someString',
    0
  )
  expect(result).toBe('No action taken.')
})

//----------------------------

// Test case 1: User found scenario
test('User found scenario', () => {
  const result = processUserData(
    true,
    ['John', 'Jane', 'example'],
    true,
    'example',
    0
  )
  expect(result).toBe('User found: example at index 2')
})

// Test case 2: Processing scenario
test('Processing scenario', () => {
  const result = processUserData(
    false,
    ['John', 'Jane', 'example'],
    true,
    'other',
    3
  )
  expect(result).toBe('Processing... Processing... Processing... ')
})

// Test case 3: No action taken scenario
test('No action taken scenario', () => {
  const result = processUserData(
    false,
    ['John', 'Jane', 'example'],
    false,
    'other',
    0
  )
  expect(result).toBe('No action taken.')
})

// Test case 4: No action taken scenario - default values
test('No action taken scenario - default values', () => {
  const result = processUserData(false, [], false, '', 0)
  expect(result).toBe('No action taken.')
})

// Test case 5: Processing scenario with zero iterations
test('Processing scenario with zero iterations', () => {
  const result = processUserData(
    false,
    ['John', 'Jane', 'example'],
    true,
    'other',
    0
  )
  expect(result).toBe('')
})

//------------------

// Test case 1: User found in array
test('User found in array', () => {
  const result = processUserData(
    true,
    ['John', 'Jane', 'name', 'Doe'],
    true,
    'name',
    0
  )
  expect(result).toBe('User found: name at index 2')
})

// Test case 2: User not found in array
test('User not found in array', () => {
  const result = processUserData(true, ['John', 'Jane', 'Doe'], true, 'name', 0)
  expect(result).toBe('')
})

// Test case 3: Processing without user search
test('Processing without user search', () => {
  const result = processUserData(
    false,
    ['John', 'Jane', 'Doe'],
    true,
    'name',
    5
  )
  expect(result).toBe(
    'Processing... Processing... Processing... Processing... Processing... '
  )
})

// Test case 4: No action taken
test('No action taken', () => {
  const result = processUserData(
    false,
    ['John', 'Jane', 'Doe'],
    false,
    'name',
    0
  )
  expect(result).toBe('No action taken.')
})

// Test case 5: Edge case - empty array
test('Edge case - empty array', () => {
  const result = processUserData(true, [], true, 'name', 0)
  expect(result).toBe('')
})
