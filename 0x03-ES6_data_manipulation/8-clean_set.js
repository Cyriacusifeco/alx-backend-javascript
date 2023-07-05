function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
}

export default cleanSet;
