import React, {useState} from "react";
import Test from "./Test";
import Button from "./Components/Button";
import Show_Banknots from "./Components/Show_Banknots";
import Input from "./Components/Input";
import {ButtonAddMoney} from "./Components/ButtonAddMoney";
import {Trening_Input} from "./TreningInput/Trening_Input";
import  s from './App.module.css'
import {v1} from "uuid";
import button from "./Components/Button";


type FilterValuesType = "All" | "Dollars" | "RUBLS" | "Done"

export type MoneyPropsType = {
    _id:string
    banknots:string,
    value:number,
    number:string
    isDone:boolean
}
const App = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    let [money, setMoney] = useState<Array<MoneyPropsType>>([
        {_id:v1(),banknots: 'Dollars', value: 100, number: ' a1234567890', isDone:true},
        {_id:v1(),banknots: 'Dollars', value: 50, number: ' z1234567890', isDone:true},
        {_id:v1(),banknots: 'RUBLS', value: 100, number: ' w1234567890', isDone:true},
        {_id:v1(),banknots: 'Dollars', value: 100, number: ' e1234567890', isDone:true},
        {_id:v1(),banknots: 'Dollars', value: 50, number: ' c1234567890', isDone:true},
        {_id:v1(),banknots: 'RUBLS', value: 100, number: ' r1234567890', isDone:true},
        {_id:v1(),banknots: 'Dollars', value: 50, number: ' x1234567890', isDone:true},
        {_id:v1(),banknots: 'RUBLS', value: 50, number: ' v1234567890', isDone:true},
    ])


    let [filter, setFilter] = useState<FilterValuesType>("All")

    const [inputTitle, setInputTitle] = useState('')
    const [inputValue, setInputValue] = useState(0)
    const [inputNumber, setInputNumber] = useState('')


    const filterMoney = (value: FilterValuesType) => {
        setFilter(value)
    }

    const addInputTitle = (banknot: string, valueMoney: number, numberMoney: string) => {
        const newMoney = {_id:v1(),banknots: banknot, value: valueMoney, number: numberMoney, isDone:true}
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

    if (filter === "Done")

        moneyForShow_Banknots = money.filter(m => m.isDone);


    const onClickButtonHandler = (name:FilterValuesType) => {
    filterMoney(name)
    }

    const setIsDone =(id:string,check:boolean) => {
let checkMoney = money.find((el)=> el._id === id)
 if (checkMoney) {checkMoney.isDone = check
        setMoney([...money])}
    }

    return (
        <div>

            <Test topCars={topCars}/>

            <Show_Banknots money={moneyForShow_Banknots} setIsDone={setIsDone}/>
            <div>
            <Button  onClickButtonCallBack={()=>onClickButtonHandler("All")} name={"All"}
                     style={filter==="All" ? s.button7_active : s.button7}/>
            <Button  onClickButtonCallBack={()=>onClickButtonHandler("Dollars")} name={"Dollars"}
                     style={filter==="Dollars" ? s.button7_active : s.button7}/>
            <Button  onClickButtonCallBack={()=>onClickButtonHandler("RUBLS")} name={"RUBLS"}
                     style={filter==="RUBLS" ? s.button7_active : s.button7}/>
            <Button  onClickButtonCallBack={()=> onClickButtonHandler("Done")} name={"Done"}
                     style={filter==="Done" ? s.button7_active : s.button7}/>
            </div>
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
