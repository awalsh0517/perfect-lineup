const validateSingleTeamRule = teamIds => (
  Object.values(teamIds).reduce((valid, teamCount) => (
    valid && teamCount <= 2
  ), true)
)

const validateSingleGameRule = gameIds => (
  Object.values(gameIds).reduce((valid, gameCount) => (
    valid && gameCount <= 3
  ), true)
)

const validatePositionCount = positions => (
  Object.values(positions).reduce((valid, position) => (
    valid && position === 0
  ), true)
)

const validateSalaryRule = salary => salary <= 45000


const validateLineup = (lineup) => {
  const teamIds = {}
  const gameIds = {}
  let totalSalary = 0
  const positions = {
    P: 1,
    C: 1,
    '1B': 1,
    '2B': 1,
    '3B': 1,
    SS: 1,
    OF: 3
  }

  lineup.forEach(({ teamId, gameId, salary, position }) => {
    if (teamIds[teamId]) {
      teamIds[teamId]++
    } else {
      teamIds[teamId] = 1
    }

    if (gameIds[gameId]) {
      gameIds[gameId]++
    } else {
      gameIds[gameId] = 1
    }

    if (totalSalary <= 45000) {
      totalSalary += salary
    }

    if (positions[position]) {
      positions[position]--
    }
  })

  return (
    validateSingleTeamRule(teamIds) &&
    validateSingleGameRule(gameIds) &&
    validateSalaryRule(totalSalary) &&
    validatePositionCount(positions)
  )
}



module.exports = validateLineup
