// Qno: 21 They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// cearted a object interface

interface studentInfo {

    studentName : string;
    studentId : number;
    courseName: string;
    timePeriod: string;
}
// store a data in object
let studentId = {

    studentName : "Muhammad Nasir",
    studentId : 43432,
    courseName : "Typescript & Javascript",
    timePeriod : "1 Year"
};

// print the result

console.log(studentId);