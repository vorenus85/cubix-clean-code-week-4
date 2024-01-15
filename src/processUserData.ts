// TODO Apply clean code basics, calculate metrics:

function processUserData(
  findUser: boolean,
  users: string[],
  logProcessing: boolean,
  userToSearch: string
): string {
  if (logProcessing) {
    if (findUser) {
      return findUserMethod(users, userToSearch)
    } else {
      return logOutProcessing(users)
    }
  } else {
    return 'No action taken.'
  }

  function logOutProcessing(users: string[]): string {
    let result = ''
    for (const _ of users) {
      result += 'Processing... '
    }
    return result
  }

  function findUserMethod(users: string[], userToSearch: string): string {
    const index = users.indexOf(userToSearch)
    return index !== -1
      ? 'User found: ' + userToSearch + ' at index ' + index
      : ''
  }
}

export default processUserData
