const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

function calculateTotalScore(students) {
  const qualifiedStudents = students.filter(student => student.score > 50);
  
  const boostedScores = qualifiedStudents.map(student => ({...student, score: student.score * 1.1,}));
  // console.log(boostedScores)

  const totalScore = boostedScores.reduce((sum, student) => sum + student.score,0);

  return (`Total score is ${totalScore.toFixed(1)}`);
}


console.log(calculateTotalScore(students));
