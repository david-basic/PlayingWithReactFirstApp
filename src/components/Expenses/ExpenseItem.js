import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    // const [ime_varijable, funkcija_za_mijenjanje_varijable_ubuduće] = useState(initial_value);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    }
    console.log("ExpenseItem evaluated by React");

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
