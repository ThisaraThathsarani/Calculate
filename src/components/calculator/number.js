import React from "react"

const Number = (props) => {
    return (
        <div>
            <input
                type="Number"
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => { props.setValue(e) }}>
            </input>
        </div>
    )
}

export default Number;
