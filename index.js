// required section
const inquirer = require("inquirer");
const mysql = require("mysql2");
const figlet = require("figlet");
const cTable = require("console.table");
require("dotenv").config();

// const to connect to SQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employeeTracker_db",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL Connected");
  startPrompt();
});

// Figlet shows the "EMPLOYEE TRACKER" in line format
figlet("EMPLOYEE  TRACKER", function (err, res) {
  if (err) {
    console.log("Uh oh! There is an error!");
    console.dir(err);
    return;
  }
  console.log(res);
});

// this function starts the question prompt & switch statements
const startPrompt = () => {
  return inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "Please select an option",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
    ])
    .then(function (val) {
      switch (val.action) {
        case "View All Departments":
          console.log(val.action);
          viewAllDepartments();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Employees":
          viewAllEmployees();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployee();
      }
    });
};
