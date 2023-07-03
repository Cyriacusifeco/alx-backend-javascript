export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((obj) => obj.id);
  }
  return [];
}
