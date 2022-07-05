const inquirer = require('inquirer');
// const fs = require('fs');
const mysql = require('mysql2');

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
  
                case 'Add Department':
                    addDept();
                    break;
                
                // case 'Quit':
                //     addDept()
                //     break;
            }
        });
    };

function viewEmployee() {
  db.query("SELECT employee.id as 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.name AS Department, roles.salary AS Salary, CONCAT(manager.first_name,' ',manager.last_name )  AS Manager, roles.title AS Role FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id", function (err, data) {
    console.log(data);
    if (err) throw err;
          init();
      });
  };

function addEmployee() {
  db.query(`INSERT INTO movies (movie_name)
  VALUES (?)`, function (err, data) {
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
  db.query("SELECT roles.id as ID, roles.title as title, department.name as Department, roles.salary as Salary  FROM roles LEFT JOIN department ON roles.department_id = department.id;", function (err, data) {
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

// function addDept() {
//   db.query(`INSERT INTO department (name) VALUES (?)`, function (err, data) {
//     console.log(data);
//     if (err) throw err;
//           init();
//           });
//   }; 

// function addDept() {
//   inquirer.prompt([
//     {
//       type:'input',
//       name:'dept',
//       message:'What is the name of the department?'
//     }
//   ])
// }

function addDept() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'What is the name of the department?'
    }
    // .then( 
    //   db.query(
    //     `INSERT INTO department VALUES (DEFAULT, name)`,
    //   )
    // )
  ])

 }
init();


  // Logs goodbye and exits the node app
//   quit() {
//     console.log("\nGoodbye!");
//     process.exit(0);
//   }
// }