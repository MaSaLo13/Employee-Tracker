

INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

CREATE TABLE roles (
id: INT PRIMARY KEY,
title: VARCHAR(30),
salary: DECIMAL,
department_id: INT
);

INSERT INTO department (title, salary, department_id)
VALUES ("Sales Lead", 100,000),
       ("Sales Person", 80,000),
       ("Lead Engineer", 150,000),
       ("Software Engineer", 120,000),
       ("Account Manager", 160,000),
       ("Accountant", 125,000),
       ("Legal Team Lead", 250,000),
       ("Lawyer", 190,000);


CREATE TABLE employee (
id: INT PRIMARY KEY

first_name: VARCHAR(30),

last_name: VARCHAR(30),

role_id: INT,

manager_id: INT