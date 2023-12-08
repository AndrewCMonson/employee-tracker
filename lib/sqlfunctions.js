const launchInquirer = require('./inquirerPrompt');
const inquirer = require('inquirer')
const db = require('../db/connection');

const viewAllDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        launchInquirer();
    })
}

const viewAllEmployees = () => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        launchInquirer();
    })
}

const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: 'department',
                type: 'input',
                message: 'What is the name of the department you would like to add?'
            }
        ]).then((response) => {
            const sql = `INSERT INTO departments (name) VALUES (?)`;
            db.query(sql, response.department, (err, rows) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Department added successfully!');
                launchInquirer();
            })
        })
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What is the title of the role you would like to add?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of the role you would like to add?'
            },
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the department ID of the role you would like to add?'
            }
        ]).then((response) => {
            const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
            db.query(sql, [response.title, response.salary, response.department_id], (err, rows) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Role added successfully!');
                launchInquirer();
            })
        })
};

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'What is the first name of the employee you would like to add?'
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'What is the last name of the employee you would like to add?'
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'What is the role ID of the employee you would like to add?'
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'What is the manager ID of the employee you would like to add?'
            }
        ]).then((response) => {
            const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            db.query(sql, [response.first_name, response.last_name, response.role_id, response.manager_id], (err, rows) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Employee added successfully!');
                launchInquirer();
            })
        })
};

const updateEmployeeRole = () => {
    inquirer
        .prompt([
            {
                name: 'employee_id',
                type: 'input',
                message: 'What is the ID of the employee whose role you would like to update?'
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'What is the new role ID of the employee?'
            }
        ]).then((response) => {
            const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
            db.query(sql, [response.role_id, response.employee_id], (err, rows) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Employee role updated successfully!');
                launchInquirer();
            })
        })
};

module.exports = {
    viewAllDepartments,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};