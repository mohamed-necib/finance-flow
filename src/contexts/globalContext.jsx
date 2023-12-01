import React, { createContext, useContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:80/finance-flow/backend/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const incomeData = new FormData();
    incomeData.append("amount", income.amount);
    incomeData.append("title", income.title);
    incomeData.append("date", income.date.toISOString().split("T")[0]);
    incomeData.append("category", income.category);
    incomeData.append("description", income.description);
    incomeData.append("frequency", "once");
    incomeData.append("type", "income");

    const response = await axios
      .post(`${BASE_URL}/data.php?add-transaction`, incomeData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => {
        setError(err.response);
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
