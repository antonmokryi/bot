class Student {
  #name;
  #studentID;
  #grades;
  #grade;

  constructor(name, studentID, grades, grade) {
    this.#name = name;
    this.#grades = grades;
    this.#grade = grade;
    this.#studentID = studentID;
    this.total = 0;

  }

  getName() {
    return this.#name
  }

  getStudentsID() {
    return this.#studentID
  }

  getGrades() {
    return this.#grades
  }
  setGrades(grade) {
    if (grade >= 1 && grade <= 5) {
      this.#grades.push(grade);
    } else {
      console.log("це число не є оцінкою ЕРОРРРРР");
    }
  }



  getAverageGrade() {
    this.sum = 0
    for (let i = 0; i < this.#grades.length; i++) {
        this.sum += this.#grades[i]
    }
    this.total = this.sum / this.#grades.length;
    return this.total
  }
}

let Stive = new Student("Stive", 223, [4, 5],);
Stive.grade = 4;
Stive.grade = 5;
let res = Stive.getAverageGrade();
console.log(Stive);

console.log(res);
