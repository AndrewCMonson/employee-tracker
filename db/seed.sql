INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Product'),
('Marketing'),
('Admin');


INSERT INTO roles (title, salary, department_id)
VALUES
('Account Manager', 125000, 1),
('Salesperson', 80000, 1),
('Lead Architect', 175000, 2),
('Junior Developer', 75000, 2),
('Software Engineer', 120000, 2),
('Product Owner', 160000, 3),
('Product Manager', 125000, 3),
('Marketing Specialist', 85000, 4),
('Marketing Manager', 125000, 4),
('Office Manager', 100000, 5),
('HR Manager', 125000, 5),
('Accountant', 130000, 5),
('Legal Team Lead', 250000, 5),
('Lawyer', 190000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Doe', 2, 1),
('Mike', 'Smith', 3, NULL),
('Sally', 'Jones', 4, 3),
('Bill', 'Johnson', 5, 3),
('Mary', 'Williams', 6, NULL),
('Chris', 'Brown', 7, 6),
('Sarah', 'Miller', 8, 6),
('Tom', 'Davis', 9, NULL),
('Joe', 'Moore', 10, 9),
('Larry', 'Taylor', 11, 9),
('Sue', 'Anderson', 12, NULL),
('Amy', 'Thomas', 13, 12),
('Ed', 'Jackson', 14, 12);