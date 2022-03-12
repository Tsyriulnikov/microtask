import React, {useState} from "react";
import Test from "./Test";
import Button, {FilterValuesType} from "./Components/Button";
import Show_Banknots, {MoneyPropsType} from "./Components/Show_Banknots";
import Input from "./Components/Input";
import {ButtonAddMoney} from "./Components/ButtonAddMoney";
import {Trening_Input} from "./TreningInput/Trening_Input";

const App = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    let [money, setMoney] = useState<Array<MoneyPropsType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    let [filter, setFilter] = useState<FilterValuesType>("All")

    const [inputTitle, setInputTitle] = useState('')
    const [inputValue, setInputValue] = useState(0)
    const [inputNumber, setInputNumber] = useState('')


    const filterMoney = (value: FilterValuesType) => {
        setFilter(value)
    }

    const addInputTitle = (banknot: string, valueMoney: number, numberMoney: string) => {
        const newMoney = {banknots: banknot, value: valueMoney, number: numberMoney}
        setMoney([newMoney, ...money])

    }


    const onClickAddInputTitle = () => {
        addInputTitle(inputTitle, inputValue, inputNumber);
        setInputTitle('');
        setInputValue(0);
        setInputNumber('')
    }


    let moneyForShow_Banknots = money;

    if (filter === "Dollars")
        moneyForShow_Banknots = money.filter(m => m.banknots === "Dollars");

    if (filter === "RUBLS")

        moneyForShow_Banknots = money.filter(m => m.banknots === "RUBLS");


    return (
        <div>

            <Test topCars={topCars}/>

            <Show_Banknots money={moneyForShow_Banknots}/>
            <Button filterMoney={filterMoney}/>
            <br/>
            <Input inputTitle={inputTitle}
                   setInputTitle={setInputTitle} inputValue={inputValue} setInputValue={setInputValue}
                   inputNumber={inputNumber} setInputNumber={setInputNumber}/>
            <ButtonAddMoney name={"Add money"} callBack={onClickAddInputTitle}/>
<Trening_Input/>
        </div>
    )
}
export default App;
