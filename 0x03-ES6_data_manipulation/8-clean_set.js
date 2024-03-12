export default function cleanSet(set, string) {
  if (string.length === 0) return '';
  const setFilter = [...set].filter((item) => item.startsWith(string));
  const setString = setFilter.map((item) => item.slice(string.length)).join('-');
  return setString;
}
