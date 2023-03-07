import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsAdding(false);
    };

    const startAddingHandler = () => {
        setIsAdding(true);
    };

    const cancelAddingHandler = (event) => {
        setIsAdding(false);
    };

    return (
        <div className="new-expense">
            {!isAdding && (
                <button onClick={startAddingHandler}>Add new expense!</button>
            )}
            {isAdding && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelAddingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
