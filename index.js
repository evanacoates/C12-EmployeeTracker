const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db',
    },
    console.log(`Connected to the db.`)
  );

  const choiceNavigation = () => {
    inquirer.prompt({
        message: 'Which category do you wish to view?',
        name: 'menu',
        type: 'list',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
        ]

    })

  };

  choiceNavigation();
