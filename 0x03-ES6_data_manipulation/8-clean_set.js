export default function cleanSet(set, string) {
  if (!string) return '';
  const setFilter = [...set].filter((item) => item.startsWith(string));
  const setString = setFilter.map((item) => item.slice(string.length)).join('-');
  return setString;
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
