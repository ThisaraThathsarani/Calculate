import React, { useContext } from "react"
import { UserContext } from "../UserContext";

const Button = () => {

    const button = useContext(UserContext);
    return (
        <div>
            <br></br>
            <button
                onClick={() => button.CalculateTotal(button.numberOne, button.numberTwo)}>
                Sum
            </button>
        </div>
    )
}

export default Button;
