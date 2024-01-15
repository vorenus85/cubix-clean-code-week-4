// TODO Apply clean code basics, calculate metricsHints:

function processUserData(
  findUser: boolean,
  users: string[],
  logProcessing: boolean,
  userToSearch: string,
  usersLength: number
): string {
  let result = ''
  if (findUser && logProcessing) {
    for (let i = 0; i < users.length; i++) {
      if (users[i] === userToSearch) {
        result += 'User found: ' + userToSearch + ' at index ' + i
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
