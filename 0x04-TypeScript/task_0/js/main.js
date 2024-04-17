// Write your code in the main.ts file:
var student1 = {
    firstName: 'Yasir',
    lastName: 'Bousri',
    age: 25,
    location: 'Morocco'
};
var student2 = {
    firstName: 'lara',
    lastName: 'Croft',
    age: 30,
    location: 'USA'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstName = document.createElement('td');
    firstName.textContent = student.firstName;
    var location = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(firstName);
    row.appendChild(location);
    table.appendChild(row);
});
