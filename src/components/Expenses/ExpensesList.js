import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    const expenses = props.items;

    // ovo ispod je treci nacin da se displaya jsx kod kada zelimo displayati vise od jedne stvari ovisno o nekom uvjetu
    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
    }

    return (
        <ul className="expenses-list">
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
