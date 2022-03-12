import React, {ChangeEvent, useState} from "react";
import {Trening_Button} from "./Trening_Button";
import {books_list} from "./State_Input";

type BooksType = {
    id: number
    title: string
    writer: string
}

export const Trening_Input = () => {
    const [books, setBooks] = useState<Array<BooksType>>(books_list)
    const [newTitleBook, setNewTitleBook] = useState('')

    const show_Books = books.map((el: BooksType) => {
        return (
            <li key={el.id}> "Название: "{el.title} " Автор: " {el.writer}</li>
        )
    })
    const onChangeNewTitleBook = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitleBook(e.currentTarget.value)
    }

    return (
        <div>

            <input value={newTitleBook} onChange={onChangeNewTitleBook}/>
            <Trening_Button/>
            {show_Books}
        </div>
    )
}