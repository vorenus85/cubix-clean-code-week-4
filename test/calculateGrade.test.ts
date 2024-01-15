import calculateGrade from '../src/calculateGrade'

describe('Test calculateGrade', () => {
  test.each`
    score | grade
    ${95} | ${'A'}
    ${90} | ${'A'}
    ${89} | ${'B'}
    ${85} | ${'B'}
    ${80} | ${'B'}
    ${79} | ${'C'}
    ${75} | ${'C'}
    ${70} | ${'C'}
    ${69} | ${'D'}
    ${50} | ${'D'}
    ${40} | ${'D'}
    ${30} | ${'D'}
    ${20} | ${'D'}
    ${10} | ${'D'}
    ${0}  | ${'D'}
  `('should return $grade if score is: $score ', ({ score, grade }) => {
    // Arrange
    const expectedResult = grade
    // Act
    const actualResult = calculateGrade(score)

    // Assert
    expect(actualResult).toBe(expectedResult)
  })
})
