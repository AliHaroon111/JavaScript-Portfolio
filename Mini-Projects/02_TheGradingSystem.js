// ---COMSATS Grading System ---


let marks = 85

console.log(`Student Marks: ${marks}`);

if (marks >= 90) {
    console.log("Grade: A (Excellent)");

    if (marks === 100) {
        console.log("🌟 Perfect Score! Reward: Gold Medal 🌟");
    }

} else if (marks >= 80 && marks < 90) {
    console.log("Grade: B (Very Good)");

} else if (marks >= 70 && marks < 79) {

    console.log("Grade: C (Good)");

} else {
    console.log("Grade: F (Needs Improvement)");
}