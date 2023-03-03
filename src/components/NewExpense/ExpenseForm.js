import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(""); // na pocetku prazno
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => { // event is a default object that is created by the evenHandler in js automatically 
        setEnteredTitle(event.target.value); // entered value se salje setu kao argument
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
