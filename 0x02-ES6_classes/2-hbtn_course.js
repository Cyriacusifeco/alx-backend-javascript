export default class HolbertonCourse {
/* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    this._name = ''; // Initialize the _name attribute
    this._length = 0; // Initialize the _length attribute
    this._students = []; // Initialize the _students attribute

    // Use setters to validate and set the attribute values
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for the length attribute
  get length() {
    return this._length;
  }

  // Setter for the length attribute
  set length(newLength) {
    if (typeof newLength === 'number' && newLength >= 0) {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for the students attribute
  get students() {
    return this._students;
  }

  // Setter for the students attribute
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
