-- seeds section section

INSERT INTO departments (id, name)
VALUES 
    (1, "Director"),
    (2, "Sales"),
    (3, "Engineering"),
    (4, "Finance"),
    (5, "Legal");

-- Role seeds section
INSERT INTO roles (department_id, title, salary)
VALUES 
    (1, "CEO", 258000),
    (2, "Sales Lead", 75000),
    (2, "Salesperson", 62000),
    (3, "Lead Engineer", 163000),
    (3, "Software Engineer", 113000),
    (4, "Accountant Manager", 110000),
    (4, "Accountant", 93000),
    (5, "Legal Team Lead", 207000),
    (5, "Lawyer", 133000);

-- Employee seeds section
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Matthew", "Silver", 1, null),
    ("Mike", "Pepke", 2, 1),
    ("Robert", "Ram", 3, 3),
    ("Patrick", "Miranda", 4, 1),
    ("Kevin", "Hart", 5, 4),
    ("Sara", "Siann", 6, 1),
    ("Hannah", "Brown", 7, 5),
    ("Michelle", "Robins", 8, 1),
    ("Lauren", "Michaels", 9, 6);