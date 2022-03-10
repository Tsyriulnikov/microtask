import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type InputTypes = {
    addInputTitle: (banknot: string,
                    valueMoney: number,
                    numberMoney: string) => void
}

const Input = (props: InputTypes) => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputValue, setInputValue] = useState(0)
    const [inputNumber, setInputNumber] = useState('')

    const onChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.currentTarget.value)
    }

    const onChangeValueMoney = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.currentTarget.value))
    }
    const onChangeNumberMoney = (event: ChangeEvent<HTMLInputElement>) => {
        setInputNumber(event.currentTarget.value)
    }

    const onClickAddInputTitle = () => {
        props.addInputTitle(inputTitle, inputValue, inputNumber);
        setInputTitle('');
        setInputValue(0);
        setInputNumber('')
    }

    return (
        <>
            <span> Name money </span>
            <input value={inputTitle}
                   onChange={onChangeInputTitle}/>
            <br/>
            <span> Value money  </span>
            <input value={inputValue}
                   onChange={onChangeValueMoney}/>
            <br/>
            <span> Number money </span>
            <input value={inputNumber}
                   onChange={onChangeNumberMoney}/>
            <br/>
            <button onClick={onClickAddInputTitle}> Add money</button>
        </>
    )
}
export default Input