import React from "react";


type ButtonsPropType = {
    name:string
    callBack:()=>void
}
export const ButtonAddMoney = (props: ButtonsPropType) => {
const onClickButtonHandler = () => {
    props.callBack();
}

    return (
        <>
            <button onClick={onClickButtonHandler}> {props.name} </button>
        </>
    )
}