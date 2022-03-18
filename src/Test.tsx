import React from "react";


type CarsPropsType = {
 manufacturer:string
 model:string
}

type TestType = {
 topCars:CarsPropsType[]

}


const Test = (props:TestType ) => {


    const tableCar =
            props.topCars.map((el:CarsPropsType, index:number) => {
                    return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                }
            )


    return (
    <table>
        <thead>
         <tr>
             <td>Number</td>
             <td>Manufacturer</td>
             <td>Model</td>
         </tr>
        </thead>
        <tbody>
          {tableCar}
        </tbody>
    </table>






)




}
export default Test;