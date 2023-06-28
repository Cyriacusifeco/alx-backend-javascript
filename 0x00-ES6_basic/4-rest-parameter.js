export default function returnHowManyArguments(...args) {
  const array = [...args];

  return array.length;
}
