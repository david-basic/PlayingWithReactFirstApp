import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // individualni nacin definiranja vise state-ova
    const [enteredTitle, setEnteredTitle] = useState(""); // na pocetku prazno
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // objedinjeni nacin definiranja vise state-ova (pazi! tu se moze dogoditi da ti se izbrisu state fragments ako ih ne navedes kao nepromijenjene naknadno)
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (event) => {
        // event is a default object that is created by the evenHandler in js automatically
        setEnteredTitle(event.target.value); // entered value se salje setu kao argument
        // setUserInput({ ...userInput, enteredTitle: event.target.value });
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({ ...userInput, enteredAmount: event.target.value });
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({ ...userInput, enteredDate: event.target.value });
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredDate: event.target.value };
        // });
    };

    const expenseSubmitHandler = (event) => {
        event.preventDefault(); // prevents the sending of a request and allows us to handle the event with javascript instead of sending a request

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log("In expense form!")
        props.onSaveExpenseData(expenseData); // when going child to parent we execute this function to pass data which is generated in the child

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    
    // umjesto da radimo na buttonu onClick, kada je button type submit unutar forme citava forma se submita i onda mozemo na formi slusati za submit event
    return (
        <form onSubmit={expenseSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
