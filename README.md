# Expense Tracker Application

## Overview

This **Expense Tracker** is a modern, minimalist web application built using **React** and **React Bootstrap** for UI components. The app allows users to track their expenses and income, providing an overview of their balance, transaction history, and the ability to add or delete transactions.

The project is designed with a focus on usability, responsiveness, and aesthetic appeal, featuring a light-themed interface with smooth animations, modern card layouts, and a consistent, clean color palette.

## Features

- **Add and Delete Transactions**: Users can add new transactions (income or expense) and delete them.
- **Overview Section**: Displays the total balance, income, and expenses in a visually appealing card layout.
- **Transaction History**: A list of all past transactions, displayed in real-time, with the ability to filter and sort.
- **Responsive Design**: The app is fully responsive, working seamlessly on both desktop and mobile devices.
- **Modern, Minimalist UI**: Leveraging React Bootstrap, the UI focuses on simplicity and elegance with soft shadows, clean typography, and sleek hover effects.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: Bootstrap components rebuilt in React for building responsive, modern UIs.
- **useContext & useReducer**: For state management within the app, allowing the transactions to be managed in a centralized way.
- **CSS Customization**: Applied additional custom styles to create a polished and modern look.

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Instructions

1. Clone the repository:

```bash
git clone https://github.com/natinael96/expense-tracker-app.git
```

2. Navigate to the project directory:

```bash
cd expense-tracker-app
```

3. Install the dependencies:

```bash
npm install
```

4. Run the app in development mode:

```bash
npm run start
```

This will run the app at `http://localhost:3000`.

## Usage

1. **View Overview**: The main page shows an overview of your total balance, income, and expenses.
2. **Add Transaction**: Use the form to add a new transaction (either expense or income).
3. **Delete Transaction**: You can delete any transaction from the history list by clicking on the "Delete" button next to it.

## Design and UI Enhancements

The application follows a **modern and minimalist design philosophy**:

- **Light Theme**: The app is optimized for a light color scheme, using soft background colors, gentle box shadows, and clean typography.
- **Card Layouts**: The `Overview` section (Balance, Income, Expenses) and `Transaction List` use responsive card layouts for clear visual separation.
- **Hover Effects**: Subtle hover animations on cards and buttons to enhance the user experience.
- **Mobile Responsiveness**: The app automatically adjusts its layout for mobile devices, ensuring a smooth user experience on smaller screens.

## Customization

### Global Context API

This project uses the Context API and `useReducer` to manage global state. The context contains two main actions:

- **addTransaction(transaction)**: Adds a new transaction (income or expense).
- **deleteTransaction(id)**: Removes a transaction from the list.

### Modify Initial Data

The initial state is stored in the `GlobalContext.js` file under the `initialState` object. You can modify the dummy transactions or add your own to prepopulate the app with custom data.

```js
const initialState = {
  transactions: [
    { id: 1, text: 'Groceries', amount: -50 },
    { id: 2, text: 'Salary', amount: 500 },
    { id: 3, text: 'Rent', amount: -300 },
    { id: 4, text: 'Freelance', amount: 150 }
  ]
};
```

## Future Enhancements

- **Categories**: Add the ability to categorize transactions for better filtering.
- **Data Persistence**: Save transaction data to local storage or integrate with a backend API to persist data across sessions.
- **Charts and Graphs**: Visualize expenses and income over time using charts for a more detailed financial overview.
- **Authentication**: Add user authentication to allow multiple users to track their expenses separately.

## Contributing

Feel free to fork the repository, create a new branch, and submit a pull request if you have any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.

---

### Thank you for using Expense Tracker
