const server = "http://localhost:4000";

export function userHistoryUrl(userId) {
  return `${server}/users/${userId}/transactions`;
}

export function userChallengesUrl(userId) {
  return `${server}/users/${userId}/challenges`;
}

export function createChallengeUrl() {
  return `${server}/challenges`;
}

export function getChallengeUrl(challengeId) {
  return `${server}/challenges/${challengeId}`;
}
