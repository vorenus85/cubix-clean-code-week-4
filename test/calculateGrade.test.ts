import calculateGrade from '../src/calculateGrade'

describe('Test calculateGrade', () => {
  test.each`
    score | grade
    ${90} | ${'A'}
    ${89} | ${'B'}
    ${80} | ${'B'}
    ${79} | ${'C'}
    ${70} | ${'C'}
    ${69} | ${'D'}
  `('should return $grade if score is: $score ', ({ score, grade }) => {
    // Arrange
    const expectedResult = grade
    // Act
    const actualResult = calculateGrade(score)

    // Assert
    expect(actualResult).toBe(expectedResult)
  })
})
