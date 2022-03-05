import React from "react";

export type MoneyPropsType = {
    banknots:string,
    value:number,
    number:string
}
type MoneyType = {
    money:MoneyPropsType[]
}

const Show_Banknots = (props:MoneyType) => {

    const tableBanknots=props.money.map((el:MoneyPropsType,index:number)=>{
            return (
                <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{el.banknots}</td>
                    <td>{el.value}</td>
                    <td>{el.number}</td>
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