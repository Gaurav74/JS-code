var student=
{
    "name":"Gaurav",
    "age": 23,
    "school": "veltech",
    "friends":["i","me","myself"]
};

console.log(student.name);
console.log(student["age"]);
console.log(student["friends"]);
student["home"]="katauli";
console.log(student.home);
delete student.school;
console.log(student);