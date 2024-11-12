import React, {  useContext, useReducer } from "react"


import AppReducer from "./AppReducer";


export const KEY = {
    DELETE_TRANSACTION: 'delete_transaction',
    ADD_TRANSACTION: 'add_transaction'
}

// Initial State | dummyText


// create context initialState
export const GlobalContext = React.createContext();

export function useGlobal(){
    return useContext(GlobalContext);
}

const initialState = {
    transactions: [
      { id: 1, text: 'Groceries', amount: -50, date: '2024-11-01' },
      { id: 2, text: 'Salary', amount: 2000, date: '2024-11-03' },
      { id: 3, text: 'Rent', amount: -800, date: '2024-11-05' },
      { id: 4, text: 'Utility Bill', amount: -150, date: '2024-11-06' },
      { id: 5, text: 'Dining Out', amount: -45, date: '2024-11-07' },
      { id: 6, text: 'Freelance Work', amount: 500, date: '2024-11-08' },
      { id: 7, text: 'Transport', amount: -20, date: '2024-11-09' },
      { id: 8, text: 'Gym Membership', amount: -60, date: '2024-11-10' },
      { id: 9, text: 'Entertainment', amount: -30, date: '2024-11-11' },
      { id: 10, text: 'Bonus', amount: 300, date: '2024-11-12' },
      { id: 11, text: 'Savings', amount: -500, date: '2024-11-12' }
    ]
  }; 

// provider component
export const GlobalProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id)=>{
        dispatch({
            type: KEY.DELETE_TRANSACTION,
            payload: id
        });
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type: KEY.ADD_TRANSACTION,
            payload: transaction
        })
    }

    return <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
}