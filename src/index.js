import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
import { data } from "./books";

function ListBook() {
    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((data) => {
                        return (
                            <div className="col-md-3">
                                <Book key={data.id} {...data} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

ReactDOM.render(<ListBook />, document.getElementById("root"));
