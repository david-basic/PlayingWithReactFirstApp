import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const allExpenses = props.items;
    // const [filteredYear, setFilteredYear] = useState("all"); // to use if you want to show all as default
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = allExpenses.filter((exp) => {
        // // if (exp.date.getFullYear().toString() === filteredYear) {
        // //     return true;
        // // }else{
        // //     return false;
        // // }
        // //ili one liner
        return exp.date.getFullYear().toString() === filteredYear;
        //moj dodatak ispod gdje za sve expensove vraca true ako je filteredYear = all
        // if (exp.date.getFullYear().toString() === filteredYear) {
        //     return true;
        // } else if (filteredYear === "all") {
        //     return true;
        // }else{
        //     return false;
        // }
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>} ovo je drugi nacin za napisati isto ono sto smo napisali sa ternary dole
                {filteredExpenses.length < 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))} */}
                {/* {filteredExpenses.length === 0 ? ( ternary nacin za pisati jsx code ako zelimo display nesto uvjetno
                    <p>No expenses found!</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )} */}
                {/* {expensesContent} */}
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
