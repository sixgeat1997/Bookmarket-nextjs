import React from 'react'
import BookCard from '../src/component/BookCard'
import style from 'styled-components'
import InputForm from '../src/component/InputForm'
import Navbar from '../src/component/Navbar'
import Mainlayout from '../src/layouts/Mainlayout'
import ProductList from '../src/component/ProductList'

const StyledWraper = style.div`
  
    display: flex;
    flex-wrap: wrap;


    grid-column-gap : 8px;

    

`

const Main = () => {


    return (
        <Mainlayout>
            <ProductList />
        </Mainlayout>

    )
}

export default Main