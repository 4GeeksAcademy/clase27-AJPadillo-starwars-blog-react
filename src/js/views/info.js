import React from "react";
import { useLocation } from "react-router-dom";

export const Info = () => {
    const location = useLocation();
    const item = location.state;

    return (
        <div className="container mt-5">
            <h1>Info</h1>
            <ul>
                <li>Name: {item.name}</li>
            </ul>
        </div>
    );
}
