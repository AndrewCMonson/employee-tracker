const inquirer = require('inquirer');
const { 
    viewAllDepartments,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateManager,
    viewEmployeeByManager,
    deleteDepartment,
    viewEmployeesByDepartment,
    deleteEmployee,
    viewSumOfSalaries,
    deleteRole
} = require('./sqlfunctions');

// Inquirer function that presents options to the user
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
                    'Update an employee\'s manager',
                    'View employees by manager',
                    'View employees by department',
                    'Delete a department',
                    'Delete an employee',
                    'View sum of salaries',
                    'Delete a role',
                    'Exit'
                ]
            }
        ]).then((response) => {
            switch (response.choices) {
                case 'View all departments':
                    viewAllDepartments(launchInquirer);
                    break;
                case 'View all employees':
                    viewAllEmployees(launchInquirer);
                    break;
                case 'Add a department':
                    addDepartment(launchInquirer);
                    break;
                case 'Add a role':
                    addRole(launchInquirer);
                    break;
                case 'Add an employee':
                    addEmployee(launchInquirer);
                    break;
                case 'Update an employee role':
                    updateEmployeeRole(launchInquirer);
                    break;
                case 'Update an employee\'s manager':
                    updateManager(launchInquirer);
                case 'View employees by manager':
                    viewEmployeeByManager(launchInquirer);
                    break;
                case 'View employees by department':
                    viewEmployeesByDepartment(launchInquirer);
                    break;
                case 'Delete a department':
                    deleteDepartment(launchInquirer);
                    break;
                case 'Delete an employee':
                    deleteEmployee(launchInquirer);
                    break;
                case 'View sum of salaries':
                    viewSumOfSalaries(launchInquirer);
                    break;
                case 'Delete a role':
                    deleteRole(launchInquirer);
                    break;
                case 'Exit':
                    process.exit();
            }
        })
};

module.exports =  launchInquirer ;