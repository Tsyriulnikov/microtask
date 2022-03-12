import React, {ChangeEvent} from "react";

type InputTypes = {
    inputTitle:string
    setInputTitle:(inputTitle:string)=>void
    inputValue:number
    setInputValue:(inputValue:number)=>void
    inputNumber:string
    setInputNumber:(inputNumber:string)=>void

}

const Input = (props: InputTypes) => {

    const onChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputTitle(event.currentTarget.value)
    }

    const onChangeValueMoney = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(Number(event.currentTarget.value))
    }
    const onChangeNumberMoney = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputNumber(event.currentTarget.value)
    }

    return (
        <>
            <span> Name money </span>
            <input value={props.inputTitle}
                   onChange={onChangeInputTitle}/>
            <br/>
            <span> Value money  </span>
            <input value={props.inputValue}
                   onChange={onChangeValueMoney}/>
            <br/>
            <span> Number money </span>
            <input value={props.inputNumber}
                   onChange={onChangeNumberMoney}/>
            <br/>

        </>
    )
}
export default Input