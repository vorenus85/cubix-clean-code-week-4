// TODO Reduce cyclomatic complexity

function calculateGrade(score: number): string {
  if (score >= 90) {
    return 'A'
  }

  if (score >= 80) {
    return 'B'
  }

  if (score >= 70) {
    return 'C'
  }

  return 'D'
}

export default calculateGrade
