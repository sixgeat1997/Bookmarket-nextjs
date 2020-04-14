import React from 'react'
import InputForm from '../src/component/InputForm'
import Mainlayout from '../src/layouts/Mainlayout'
import ProductList from '../src/component/ProductList'
import { useState } from 'react'

const Manage = () => {

    const [newbook, setNewbook] = useState()

    const Createbook = (book) => {
        setNewbook(book)
        console.log(book);
        
    }


    return (
        <Mainlayout>
            <h3>เพิ่มหนังสือ</h3>
            <InputForm Createbook={Createbook} />
            <h3>หนังสือทั้งหมด</h3>
            <ProductList newbook={newbook} />
        </Mainlayout>
    )
}

export default Manage