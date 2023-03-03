import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); // ovo je tzv, array destructuring, tu je bitan red, zato imena elemenata mogu biti sto god
    // useState uvijek vraca array sa 2 elementa gdje je prvi value vrijednost varijable(dane useState hooku) pod nekim nazivom, a druga funkcija za mijenjanje value te varijable
    // const [vrijednost_varijable_pod_nekim_nazivom, funkcija_za_mijenjanje_varijable_ubuduće] = useState(initial_value);
    // kada se okine funkcija setTitle koju smo dobili iz useState function, citava komponenta se ponovo pokrene i iscrta

    const clickHandler = () => {
        setTitle("Updated!"); // tu zovemo tu metodu koju nam je useState vratio za mijenjanje vrijednosti
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
