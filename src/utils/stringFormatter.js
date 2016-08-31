export function formatUTCDate(date) {
  const birth = new Date(date);
  return `${birth.getUTCDate()}/${birth.getUTCMonth() + 1}/${birth.getUTCFullYear()}`;
}

export function camelCaseToSentence(string) {
  return string.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}
