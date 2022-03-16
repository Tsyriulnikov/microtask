import React from "react";
export type Trening_ButtonTypes = {
    addBook:()=>void
}
export const Trening_Button = (props:Trening_ButtonTypes) => {
   const addBookCallBack = () => {
       return(
       props.addBook()
    )   }
       return(
        <div>
<button onClick={addBookCallBack}> Add book </button>

        </div>
    )
}