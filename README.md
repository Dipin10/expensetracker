#Budget Tracker App

The Budget Tracker Application is a simple web application built with Angular and styled using Tailwind CSS. The application allows users to manage their income and expenses, providing insights into their financial status.

Features

User Registration and Authentication: Users can register and log in to access their financial data.

Income and Expense Management: Users can add, edit, delete, and view their income and expenses.

Data: Each user can only access their data.

Statistics Summary: The application displays total income, total expenses, and the overall balance.

Pagination, Filtering, and Search: Users can navigate through their income and expense records efficiently Search their total income and expenses apply filter for their reoccuring and types of expenses used.

Technologies used

Angular: Frontend framework for building the application. Tailwind CSS: Utility-first CSS framework for styling. Local Storage: To store user data in the browser.

Project Setup Prerequisites Ensure you have the following installed:

Node.js (version 14 or later) Angular CLI (version 12 or later)

Installation Steps Clone the repository git clone <repository-url> cd expensetracker

Install Dependencies:

Navigate to the project directory and run: npm install

Install TailwindCss

npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p

Configure TailwindCss(For new project setup but may not require for cloned projects)

Update tailwind.config.js:
module.exports = { content: [ "./src/**/*.{html,ts}", ], theme: { extend: {}, }, plugins: [], }

Include Tailwind In your styles(For new project setup but may not require for cloned projects) Add the following lines to src/styles.css

@tailwind base; @tailwind components; @tailwind utilities;

Run the development Server ng serve

Open your browser and navigate to http://localhost:4200

Components Overview

Auth Component: Handles user registration and authentication. Dashboard Component: Displays user statistics, income, and expenses. Services: Manages authentication and budget operations. Income/Expense Component: Add Edit Delete income/expenses , Search for the income/expenses on basis of their description,Filter and Pagination
