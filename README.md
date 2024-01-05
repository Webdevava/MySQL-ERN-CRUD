# CRUD Application with MySQL, React, Node.js, and Express

This is a simple CRUD (Create, Read, Update, Delete) application that manages student names and email IDs. The application is built using MySQL for the database, React for the frontend, and Node.js with Express for the backend. XAMPP is used to provide a local development environment.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [XAMPP](https://www.apachefriends.org/index.html)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [MySQL](https://www.mysql.com/)

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Webdevava/MySQL-ERN-CRUD.git
    cd your-crud-app
    ```

2. **Install Backend Dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Create MySQL Database:**

    - Open XAMPP and start the MySQL server.
    - Create a new database named `crud_app`.
    - Import the `database.sql` file into the `crud_app` database to set up the required table.

4. **Configure Database Connection:**

    - Update the database connection configuration in `server/config/db.js` with your MySQL credentials.

5. **Install Frontend Dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

6. **Start the Application:**

    - Start the Node.js server:

        ```bash
        cd ../backend
        node index.js
        ```

    - Start the React app:

        ```bash
        cd ../frontend
        npm run dev
        ```

    The application should now be accessible at `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` in your browser to interact with the CRUD application.
- You can perform CRUD operations on student names and email IDs.

## Folder Structure

- `backend`: Contains the Node.js server files.
- `frontend`: Contains the React frontend files.

## Technologies Used

- **Frontend:**
  - React

- **Backend:**
  - Node.js
  - Express
  - MySQL

## Contributing

Feel free to contribute to this project.

## Authors

- Webdevava

