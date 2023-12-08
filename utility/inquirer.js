const inquirer = require('inquirer');
const { viewAllDepartments, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./sqlfunctions');

const launchInquirer = () => {
    inquirer
        .prompt([
            {
                name: 'choices',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ]
            }
        ]).then((response) => {
            switch (response.choices) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
            }
        })
};

module.exports = launchInquirer;