import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Book = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.id} />
            <h2>{props.title}</h2>
            <h2>{props.price}</h2>
            <h2>{props.discount}</h2>
        </div>
    );
};

export default Book;
