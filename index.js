const inquirer = require('inquirer');
// const fs = require('fs');
const mysql = require('mysql2');
// const Employee = require(".db/query.sql");
// const showEmployee = require("")
// const AddEmployee = require("./lib/AddEmployee")
// const UpdateRole = require("./lib/UpdateRole")
// const renderTeam = require("./src/html-templates");
// const tests = require("./__tests__");
// const tests1 = new tests(); 
// view all employees needs seeds? schema?
// addEmployee
// update Employee role
// View all roles needs seeds? schema?
// add role 
// View all departments  needs seeds? schema?
// add deparments
// quit

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Password123',
    database: 'employtrack_db'
  },
  console.log(`Connected to the employtrack database.`)
);

const init  = () => {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: ['View All Employees', 'Add Employee', "Update Employee Role", "View All Roles", "View All Departments", "Add Department", "Quit"],
            },
        ])

        .then(answer => {
            switch (answer.choice) {
                case 'View All Employees':
                    viewEmployee();
                    break;

                case 'Add Employee':
                    addEmployee()
                    break;

                case 'Update Employee Role':
                    updateRole()
                    break;

                case 'View All Roles':
                    viewRoles();
                    break;
  
                case 'View All Departments':
                    viewDept()
                    break;
  
                case 'Add Deparment':
                    addDept()
                    break;
                
                // case 'Quit':
                //     addDept()
                //     break;
            }
        });
    };

function viewEmployee() {
  db.query("SELECT * FROM employee", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
      });
  };

function addEmployee() {
  db.query("SELECT * FROM employee", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
        });
  }; 

function updateRole() {
  db.query("SELECT * FROM employee", function (err, data) {
    console.log(data);
    if (err) throw err;
           init();
          });
  };

function viewRoles() {
  db.query("SELECT title, salary FROM roles", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
          });
  }; 

function viewDept() {
  db.query("SELECT * FROM department", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
          });
  }; 

function addDept() {
  db.query("SELECT * FROM employee", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
          });
  }; 

init();

// Query database 12/22 will show table 
// db.query('SELECT * FROM favorite_books', function (err, results) {
//   console.log(results);
// });

  // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }
// }