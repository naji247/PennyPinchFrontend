const server = "http://localhost:4000";

export function userHistoryUrl(userId) {
  return `${server}/users/${userId}/transactions`;
}

export function userChallengesUrl(userId) {
  return `${server}/users/${userId}/challenges`;
}

export function challengesUrl() {
  return `${server}/challenges`;
}
