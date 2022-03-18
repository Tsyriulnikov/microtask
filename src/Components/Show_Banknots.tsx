import React from "react";
import { MoneyPropsType } from "../App";


type MoneyType = {
     money:Array<MoneyPropsType>
     setIsDone:(id:string, check:boolean)=>void
}

const Show_Banknots = (props:MoneyType) => {

    const onChangeCheckBoxHandler = (id:string, check:boolean ) => {
      props.setIsDone(id, check)
    }
    
    const tableBanknots=props.money.map((el:MoneyPropsType,index:number)=>{
            return (
                <tr key={el._id}>
                    <td>{index+1}</td>
                    <td>{el.banknots}</td>
                    <td>{el.value}</td>
                    <td>{el.number}</td>
                    <td><input type="checkbox" onChange={(e)=>onChangeCheckBoxHandler(el._id, e.currentTarget.checked)}
                               checked={el.isDone}/></td>
                </tr>
            )
        }

    )

    return (
        <div>
    <table>
        <thead>
        <tr>
            <td>In order</td>
            <td>Banknots</td>
            <td>Value</td>
            <td>Number</td>
        </tr>
        </thead>
        <tbody>
        {tableBanknots}
        </tbody>
    </table>


</div>
    )

};
export default Show_Banknots