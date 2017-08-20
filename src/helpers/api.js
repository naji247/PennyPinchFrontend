const server = "http://localhost:4000";

export function userHistoryUrl(userId) {
  return `${server}/users/${userId}/transactions`;
}

export function userActiveChallengesUrl(userId) {
  return `${server}/users/${userId}/challenges?active=1`;
}

export function createChallengeUrl() {
  return `${server}/challenges`;
}

export function showChallengeUrl(challengeId) {
  return `${server}/challenges/${challengeId}`;
}
