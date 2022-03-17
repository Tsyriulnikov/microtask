import React from "react";

type ButtonPropsType = {

    onClickButtonCallBack: () => void
    name: string
    style: string
}


const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.onClickButtonCallBack()
    }

    return (
        <button
            className={props.style}
            onClick={onClickButtonHandler}>{props.name}</button>
    )

};
export default Button