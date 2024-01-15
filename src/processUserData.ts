// TODO Apply clean code basics, calculate metricsHints:

function processUserData(
  x: number,
  y: string,
  findUser: boolean,
  users: string[],
  b: number,
  logProcessing: boolean,
  searchedUser: string,
  usersLength: number
): string {
  let result = ''
  if (findUser && logProcessing) {
    for (let i = 0; i < users.length; i++) {
      if (users[i] === searchedUser) {
        result += 'User found: ' + searchedUser + ' at index ' + i
        break
      }
    }
  } else if (!findUser && logProcessing) {
    let count = 0
    while (count < usersLength) {
      result += 'Processing... '
      count++
    }
  } else {
    result = 'No action taken.'
  }
  return result
}

export default processUserData
