DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(30) NOT NULL);

CREATE TABLE roles();

CREATE TABLE employee();