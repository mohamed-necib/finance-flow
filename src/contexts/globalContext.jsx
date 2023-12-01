import React, { createContext, useContext, useState } from "react";

const BASE_URL = "http://localhost/finance-flow/backend/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios.post(`$BASE_URL/data.php?add-transaction`, income)
    .catch((err) => {
      setError(err.response.data.message);
    })
  }

  return (
  <GlobalContext.Provider value={{
    addIncome,
  }} >
    {children}
  </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}
