// //Array to store users
// let users = [];

// //function to add a user
// function addUser({ name = "Unknown", age = 0, city = null } = {}) {
//   const newUser = { name, age, city };
//   users.push(newUser);
//   console.log(`User ${name} added successfully!`);  
// }
// //function to display all users
// function displayUsers() {
//     console.log("Users List:");
//     users.forEach((user, index) => {
//         // Destructuring with nullish coalescing 
//         const { name, age, city } = user;
//         console.log(`${index + 1}. Name: ${name}, Age: ${age}, City: ${city ?? "N/A"}`);
//     });
// }
// //function to update a user
// function updateUser(index, updatedData = {}) {
//     if (users[index]) {
//         // Spread operator to merge old and new data
//         users[index] = { ...users[index], ...updatedData };
//         console.log(`User ${users[index].name} updated successfully.`);
//     } else {
//         console.log("User not found at this index.");
//     }
// }
// //function to remove a user
// function removeUser(index) {
//     if (users[index]) {
//         const removed = users.splice(index, 1);
//         console.log(`User ${removed[0].name} removed successfully.`);
//     } else {
//         console.log("User not found at this index.");
//     }
// }
// addUser({ name: "Ujwal", age: 19 });
// //User Ujwal added successfully!
// addUser({ name: "Jon", city: "Pokhara" });
// //User Jon added successfully!
// addUser(); // Uses default parameters
// //User Unknown added successfully!
// displayUsers();
// // Output:
// // 1. Name: Ujwal, Age: 19, City: N/A
// // 2. Name: Jon, Age: 0, City: Pokhara
// // 3. Name: Unknown, Age: 18, City: N/A
// updateUser(1, { age: 20, city: "Lalitpur" });
// //User Jon updated successfully.
// displayUsers();
// // Output:
// // 1. Name: Ujwal, Age: 19, City: N/A
// // 2. Name: Jon, Age: 20, City: Lalitpur
// // 3. Name: Unknown, Age: 18, City: N/A
// removeUser(0);
// //User Ujwal removed successfully.
// displayUsers();
// // Output:
// // 1. Name: Jon, Age: 20, City: Lalitpur
// // 2. Name: Unknown, Age: 18, City: N/A

