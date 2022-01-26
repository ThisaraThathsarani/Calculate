import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    const [total, setTotal] = useState(0);
    const CalculateTotal = (numberOne, numberTwo) => {
        setTotal(parseInt(numberOne) + parseInt(numberTwo));
    }

    return (
        <UserContext.Provider
            value={{
                numberOne,
                numberTwo,
                setNumberOne,
                setNumberTwo,
                total,
                setTotal,
                CalculateTotal
            }}
        >
            {children}
        </UserContext.Provider>
    )
}