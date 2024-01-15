// TODO Reduce cyclomatic complexity

function calculateGrade(score: number): string {
  const gradeThresholds = [90, 80, 70]
  const grades = ['A', 'B', 'C', 'D']

  const index = gradeThresholds.findIndex((threshold) => score >= threshold)
  return grades[index] || 'D'
}

export default calculateGrade
