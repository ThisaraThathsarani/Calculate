import React, { useContext } from "react"
import Total from "./total";
import Number from "./number";
import { UserContext } from "../UserContext";

const Calculate = () => {

    const calculate = useContext(UserContext);
    return (
        <div className="Main">
            <div className="Main-displayTotal">
                <Total total={calculate.total} />
            </div><br></br>
            <div class="container">
                <div class="row">
                    <div  class="col">
                        <Number value={calculate.numberOne} placeholder={"Enter first number"} setValue={(e) => { calculate.setNumberOne(e.target.value) }} />
                    </div>
                    <div class="col">
                        <Number value={calculate.numberTwo} placeholder={"Enter second number"} setValue={(e) => { calculate.setNumberTwo(e.target.value) }} />
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Calculate;
