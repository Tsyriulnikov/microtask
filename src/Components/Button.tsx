import React from "react";

type ButtonPropsType = {

    onClickButtonHandler: (name: any) => void
    name: any
    text: string
style:string
}


const Button = (props: ButtonPropsType) => {

    return (
        <button
            className={props.style}
            onClick={() => {
            props.onClickButtonHandler(props.name)
        }}>{props.text}</button>
    )

};
export default Button