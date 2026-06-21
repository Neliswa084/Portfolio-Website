// Asynchronous Programming

// Fake student database
const studentDatabase = [
    { id: 1, firstName: "Neliswa", lastName: "Ngcobo", email: "neliswa@email.com", course: "Web Development", age: 24 },
    { id: 2, firstName: "Thabo", lastName: "Mokoena", email: "thabo@email.com", course: "Web Development", age: 22 },
    { id: 3, firstName: "Amahle", lastName: "Dlamini", email: "amahle@email.com", course: "Web Development", age: 25 },
    { id: 4, firstName: "Sipho", lastName: "Khumalo", email: "sipho@email.com", course: "Web Development", age: 23 },
    { id: 5, firstName: "Lerato", lastName: "Nkosi", email: "lerato@email.com", course: "Web Development", age: 21 }
];

// Question 1: Synchronous JavaScript
function synchronousDemo() {
    console.log("Step-1 - The function is starting");
    console.log("Step-2 - The Process is in action");
    console.log("Step-3 - The function reached the final stage");
}

synchronousDemo();

// Question 2: Using setTimeout()
function getAllStudents() {
    setTimeout(function() {
        console.log("Student Records:");
        for (let i = 0; i < studentDatabase.length; i++) {
            console.log(studentDatabase[i]);
        }
    }, 3000);
}

getAllStudents();
