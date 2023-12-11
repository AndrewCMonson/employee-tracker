const inquirer = require('inquirer')
const db = require('../db/connection');

// Functions that accept a callback function as an argument -- the function passed to them will be the one used to launch inquirer

// SQL query that returns all departments
const viewAllDepartments = (callback) => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        err ? console.log(err) : console.table(rows);
        callback();
    })
}

// SQL query that returns all employees
const viewAllEmployees = (callback) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        err ? console.log(err) : console.table(rows);
        callback();
    })
}

// SQL query that adds a department via inquirer
const addDepartment = (callback) => {
    inquirer
        .prompt([
            {
                name: 'department',
                type: 'input',
                message: 'What is the name of the department you would like to add?',
                validate: departmentInput => 
                    departmentInput ? true : console.log('Please enter a department name!') 
            }
        ]).then((response) => {
            const sql = `INSERT INTO departments (name) VALUES (?)`;
            db.query(sql, response.department, (err, rows) => {
                err ? console.log(err) : console.log('Department added successfully!')
                callback();
            })
        })
};

// SQL query that adds a role via inquirer
const addRole = (callback) => {
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
                err ? console.log(err) : console.log('Role added successfully!');
                callback();
            })
        })
};

// SQL query that adds an employee via inquirer
const addEmployee = (callback) => {
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
                callback();
            })
        })
};

// SQL query that updates an employee's role via inquirer
const updateEmployeeRole = (callback) => {
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
                callback();
            })
        })
};

const viewEmployeesByDepartment = (callback) => {
    inquirer
        .prompt([
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the ID of the department you would like to view employees for?'
            }
        ]).then((response) => {
            const sql = `SELECT employees.first_name, employees.last_name FROM employees INNER JOIN roles ON employees.role_id = roles.id WHERE roles.department_id = ?`;
            db.query(sql, response.department_id, (err, rows) => {
                rows.length < 1 ? console.log('That is not a valid department ID.') : console.table(rows);
                if (err) {
                    console.log(err);
                    return;
                };
                callback();
            })
        })
};

const deleteEmployee = (callback) => {
    inquirer
        .prompt([
            {
                name: 'employee_id',
                type: 'input',
                message: 'What is the ID of the employee you would like to delete?'
            }
        ]).then((response) => {
            const sql = `DELETE FROM employees WHERE id = ?`;
            db.query(sql, response.employee_id, (err, rows) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('Employee deleted successfully!');
                callback();
            })
        })
};

const viewSumOfSalaries = (callback) => {
    const sql = `SELECT SUM(salary) FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        callback();
    })
};

module.exports = {
    viewAllDepartments,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    viewEmployeesByDepartment,
    deleteEmployee,
    viewSumOfSalaries,
};