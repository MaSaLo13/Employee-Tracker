
-- viewDept
SELECT * FROM department

-- viewRoles
SELECT roles.id as ID, roles.title as 'Job Title', department.name as Department, roles.salary as Salary  FROM roles LEFT JOIN department ON roles.department_id = department.id;


-- viewEmployee
SELECT employee.id as 'Employee ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', department.name AS Department, roles.salary AS Salary, CONCAT(manager.first_name,' ',manager.last_name )  AS Manager, roles.title AS Role FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id