

INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Sales Person", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 2),
       ("Lawyer", 190000, 2);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("John, Doe"),
("Mike, Chan"),
("Ashley, Rodriguez"),
("Kevin, Tupik"),
("Kunal, Singh"),
("Malia, Brown"),
("Sarah, Lourd"),
("Tom, Allen");
