# Tech Blog

## Description

---

Tech Blog is a full stack web application that allows logged in users to create blog posts, view them, add comments, make updates, and even delete posts as needed. Non-users are only able to view blog posts without making any changes to them.

Application was built following the Model View Controller (MVC) design architecture.

## Table of Contents

---

- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Demonstration](#demonstration)
- [Authors](#authors)
- [Notes](#notes)

## Installation

---

    - Download or clone this repository,
    - Make sure to have Node.js installed,
    - Open up your integrated terminal and type "npm install" or "npm i" to install the required npm packages.
    - dotenv is listed as a dependency, however, it's purpose was only to hide my personal credientials, which creates the connection to the MySQL database.
    - nodemon is listed as a devDependency and isn't required for the use of this application. Only purpose was for development.

## Usage

---

After installation of the dependencies, you should copy the following code and paste it into a .env file. I would update DB_PW to your own personal password used to login to the MySQL Database within the quotation marks. This will allow the connection to be made between Sequelize and the MySQL database. SESSION_SECRET is whichever string you would like to pass in to allow access to your sessions.

    DB_NAME = 'blog_db'
    DB_USER = 'root'
    DB_PW = ''
    SESSION_SECRET = ''

Before initalizing the application, you would need to open up the integrated terminal and type in the following command

    mysql -u root -p

You will then be prompted to input your password from MySQL. From there, you will then run the following command to create the database.

    source db/schema.sql;

Now that the database has been created and the connection has been made, you can now start the application by running the following commands in the terminal. The first command will fill up the database with preset values and the the command following that will initate the application.

    npm run seed
    npm start

Once the application is running, it can be accessed through

    http://localhost:3001/

## Technology

---

Technology used to build the application:

    - Javascript
    - Node.js
    - MySQL
    - Sequelize
    - Express.js
    - Model-View-Controller (MVC)
    - Handlebars.js

## Demonstration

---

[Demonstration Video](https://drive.google.com/file/d/1pn1rukwP1pT-2wufEYcNCjY9XzJAYgtC/view)

## Authors

---

- Tony Tran
  - [GitHub](https://github.com/tonytran97)

## Notes

---

This application was is not finished, still a work in progress. Missing features such as adding comments, editing posts, and deleting posts.
