const inquirer = require('inquirer');
// const fs = require('fs');
const mysql = require('mysql2');
// const Manager = require("./lib/Manager");
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

// const teamMemberObjArr = []

const init  = () => {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'choice',
                choices: ['AddEmployee', 'UpdateRole', "I'm Done"],
            },
        ])
        .then(answer => {
            switch (answer.choice) {
                case 'AddEmployee':
                    createEngineer()
                    break;

                case 'UpdateRole':
                    createIntern()
                    break;

                default:
                    buildTeam()
                    break;
            }
        });
    };

//     function createEngineer() {
//         inquirer.prompt([
//             {
//               type: 'input',
//               name: 'id',
//               message: 'What is the engineers id?',
//             },
//             {
//               type: 'input',
//               name: 'name',
//               message: 'What is the engineers name?',
//             }, 
//             {
//               type: 'input',
//               name: 'email',
//               message: 'What is the engineers email?',
//             }, 
//             {
//                 type: 'input',
//                 name: 'Github',
//                 message: 'What is the engineers Github?',
//               },
//           ])
//           .then(answers => {
//             const engineer = new Engineer (
//                 answers.id,
//                 answers.name,
//                 answers.email,
//                 answers.Github,
//             )
//             teamMemberObjArr.push(engineer)
//             addEmployees()
//           });

//     }

//     function createIntern() {
//         inquirer.prompt([
//             {
//               type: 'input',
//               name: 'id',
//               message: 'What is the interns id?',
//             },
//             {
//               type: 'input',
//               name: 'name',
//               message: 'What is the interns name?',
//             },
//             {
//               type: 'input',
//               name: 'email',
//               message: 'What is the interns email?',
//             },
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What is the interns school?',
//               },
//           ])
//           .then(answers => {
//             const intern = new Intern (
//                 answers.id,
//                 answers.name,
//                 answers.email,
//                 answers.school,
//             )
//             teamMemberObjArr.push(intern)
//             addEmployees()
//           });

//     };
    
        
//     function buildTeam() {
//         fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), "utf-8")
//         // .then(() => console.log('Successfully wrote to index.html'))
//         // .catch((err) => console.error(err));

//     };

//     createManager();

// };

init();