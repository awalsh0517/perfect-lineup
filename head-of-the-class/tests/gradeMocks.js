const mockAssignmentAverages = [
  { name: 'The Price is Right', average: 90 },
  { name: 'TV Synopsis', average: 93.5 },
  { name: 'Order Book', average: 94.5 },
  { name: 'TDD Strict Equality', average: 93.25 },
  { name: 'Fantasy Scoring', average: 95.5 },
]

const mockStudentAverages = [
  { name: 'Shondra', average: 90.2 },
  { name: 'Evelyn', average: 94.2 },
  { name: 'Steve', average: 91.6 },
  { name: 'Jamal', average: 97.4 },
]

const mockGrades = [
  { assignment: 'The Price is Right', student: 'Shondra', score: 85 },
  { assignment: 'TV Synopsis', student: 'Evelyn', score: 88 },
  { assignment: 'Order Book', student: 'Steve', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Jamal', score: 98 },
  { assignment: 'The Price is Right', student: 'Evelyn', score: 89 },
  { assignment: 'Fantasy Scoring', student: 'Jamal', score: 95 },
  { assignment: 'TDD Strict Equality', student: 'Steve', score: 87 },
  { assignment: 'TV Synopsis', student: 'Steve', score: 88 },
  { assignment: 'Fantasy Scoring', student: 'Shondra', score: 96 },
  { assignment: 'TDD Strict Equality', student: 'Evelyn', score: 96 },
  { assignment: 'Fantasy Scoring', student: 'Evelyn', score: 98 },
  { assignment: 'Order Book', student: 'Shondra', score: 78 },
  { assignment: 'The Price is Right', student: 'Jamal', score: 96 },
  { assignment: 'Order Book', student: 'Jamal', score: 100 },
  { assignment: 'The Price is Right', student: 'Steve', score: 90 },
  { assignment: 'TV Synopsis', student: 'Shondra', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Shondra', score: 92 },
  { assignment: 'Order Book', student: 'Evelyn', score: 100 },
  { assignment: 'Fantasy Scoring', student: 'Steve', score: 93 },
  { assignment: 'TV Synopsis', student: 'Jamal', score: 98 },
]

function score (chores, predicate) {
  return chores
    .filter(predicate)
    .map((chore) => chore.minutes)
    .reduce((total, minutes) => total + minutes, 0)


const testFn = grades => {
  return Object.keys(grades.reduce((assignments, assignment) => {
    return {
      ...assignments,
      [assignment.assignment]: [...assignments[assignment.assignment], assignment.score]
    }
  }, {})).map(...)
}

module.exports = { mockAssignmentAverages, mockStudentAverages, mockGrades }


// const intermediaryAverages = [
//   { name: 'The Price is Right', scores: [90] },
//   { name: 'TV Synopsis', scores: [90] },
//   { name: 'Order Book', scores: [90] },
//   { name: 'TDD Strict Equality', scores: [90] },
//   { name: 'Fantasy Scoring', scores: [90] },
// ]
