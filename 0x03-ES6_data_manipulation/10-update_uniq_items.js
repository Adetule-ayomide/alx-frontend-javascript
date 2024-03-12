export default function updateUniqueItems(mapList) {
  for (const [key, value] of mapList.entries()) {
    if (value === 1) mapList.set(key, 100);
  }
  return mapList;
}
