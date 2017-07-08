const server = "http://localhost:4000";

export function userHistoryUrl(userId) {
  return `${server}/users/${userId}/transactions`;
}
