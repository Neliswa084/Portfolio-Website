// Task 2 - Student Grader
// DOM elements
let nameInput = document.getElementById("studentName");
let markInput = document.getElementById("studentMark");
let resultArea = document.getElementById("resultArea");
let studentList = document.getElementById("studentList");

function gradeStudent() {
    let studentName = nameInput.value;
    let studentMark = parseInt(markInput.value);

    // Validate input
    if (studentName === "") {
        resultArea.textContent = "Please enter a student name.";
        resultArea.style.color = "red";
        return;
    }

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        resultArea.textContent = "Please enter a valid mark between 0 and 100.";
        resultArea.style.color = "red";
        return;
    }

    // Determine grade and result using if / else if / else
    let grade;
    let result;

    if (studentMark >= 80 && studentMark <= 100) {
        grade = "Distinction";
        result = "PASS";
    } else if (studentMark >= 65 && studentMark <= 79) {
        grade = "Merit";
        result = "PASS";
    } else if (studentMark >= 50 && studentMark <= 64) {
        grade = "Pass";
        result = "PASS";
    } else {
        grade = "Fail";
        result = "FAIL";
    }

    // Update the result area
    resultArea.textContent = studentName + " - " + result + " (" + grade + ")";
    resultArea.style.color = result === "PASS" ? "green" : "red";

    // Add student to the list using createElement and appendChild
    let listItem = document.createElement("li");
    listItem.textContent = studentName + " | Mark: " + studentMark + " | " + result + " - " + grade;
    studentList.appendChild(listItem);

    // Clear the inputs
    nameInput.value = "";
    markInput.value = "";
    nameInput.focus();
}
