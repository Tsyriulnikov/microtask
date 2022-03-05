import React from "react";

type ButtonPropsType = {
    filterMoney: (value: FilterValuesType) => void
}
export type FilterValuesType = "All" | "Dollars" | "RUBLS"


const Button = (props: ButtonPropsType) => {

    return (
        <div>
            <button onClick={() => {
                props.filterMoney("All")
            }}>All
            </button>

            <button onClick={() => {
                props.filterMoney("Dollars")
            }}> Dollars
            </button>

            <button onClick={() => {
                props.filterMoney("RUBLS")
            }}>Rbls
            </button>
        </div>
    )

};
export default Button