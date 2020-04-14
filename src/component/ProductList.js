import BookCard from './BookCard'
import style from 'styled-components'
import { useState, useEffect } from 'react'


const StyledWraper = style.div`
  
    display: flex;
    flex-wrap: wrap;


    grid-column-gap : 8px;

    

`
const books = [
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201712/226513/1000202878_front_XXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-10-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B0%E0%B9%81%E0%B8%99%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD",
        bname: "ใช้เวลาว่าง 10 นาทีช่วยให้คะแนนดีเหลือเชื่อ",
        wname: "Shin Sung Il",
        type: "books ",
        quatity: 12,
        price: 160
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/202004/502826/1000232239_front_XXL.jpg?imgname=SUPER-PRO-DUCK-THEP-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E",
        bname: "สุดยอดมนุษย์เป็ดเก่งขั้นเทพ",
        wname: "นัดเป็ด",
        type: "books",
        quatity: 26,
        price: 165
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/477527/1000218507_front_XXL.jpg?imgname=%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B9%86-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99",
        bname: "จริงๆ แล้วโลกดีขึ้นทุกวัน",
        wname: " ฮันส์ รอสลิง",
        type: "books",
        quatity: 2,
        price: 235
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/476851/1000218105_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%9E%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%B5%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%B4%E0%B8%87",
        bname: "เพงกระบี่ สีจิ้นผิง",
        wname: "People",
        type: "books",
        quatity: 7,
        price: 266
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201712/226513/1000202878_front_XXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-10-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B0%E0%B9%81%E0%B8%99%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD",
        bname: "ใช้เวลาว่าง 10 นาทีช่วยให้คะแนนดีเหลือเชื่อ",
        wname: "Shin Sung Il",
        type: "books ",
        quatity: 12,
        price: 160
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/202004/502826/1000232239_front_XXL.jpg?imgname=SUPER-PRO-DUCK-THEP-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E",
        bname: "สุดยอดมนุษย์เป็ดเก่งขั้นเทพ",
        wname: "นัดเป็ด",
        type: "books",
        quatity: 26,
        price: 165
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/477527/1000218507_front_XXL.jpg?imgname=%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B9%86-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99",
        bname: "จริงๆ แล้วโลกดีขึ้นทุกวัน",
        wname: " ฮันส์ รอสลิง",
        type: "books",
        quatity: 2,
        price: 235
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/476851/1000218105_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%9E%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%B5%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%B4%E0%B8%87",
        bname: "เพงกระบี่ สีจิ้นผิง",
        wname: "People",
        type: "books",
        quatity: 7,
        price: 266
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201712/226513/1000202878_front_XXL.jpg?imgname=%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-10-%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%84%E0%B8%B0%E0%B9%81%E0%B8%99%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD",
        bname: "ใช้เวลาว่าง 10 นาทีช่วยให้คะแนนดีเหลือเชื่อ",
        wname: "Shin Sung Il",
        type: "books ",
        quatity: 12,
        price: 160
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/202004/502826/1000232239_front_XXL.jpg?imgname=SUPER-PRO-DUCK-THEP-%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%9E",
        bname: "สุดยอดมนุษย์เป็ดเก่งขั้นเทพ",
        wname: "นัดเป็ด",
        type: "books",
        quatity: 26,
        price: 165
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/477527/1000218507_front_XXL.jpg?imgname=%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87%E0%B9%86-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%99",
        bname: "จริงๆ แล้วโลกดีขึ้นทุกวัน",
        wname: " ฮันส์ รอสลิง",
        type: "books",
        quatity: 2,
        price: 235
    },
    {
        img: "https://storage.naiin.com/system/application/bookstore/resource/product/201904/476851/1000218105_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%9E%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%B5%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%B4%E0%B8%87",
        bname: "เพงกระบี่ สีจิ้นผิง",
        wname: "People",
        type: "books",
        quatity: 7,
        price: 266
    },
]

const ProductList = (props) => {

    const { newbook } = props
    const {wname} = {...newbook}
  

    console.log(wname);



    const [library, setLibrary] = useState(books)

    const handleBuy = (key) => {
        if (library[key].quatity > 0) {
            library[key].quatity--
            setLibrary([...library])
        }
    }

    useEffect(() => {
        if (wname) {
            console.log(newbook);
            library.push(newbook)
            setLibrary([...library])
        }

    }, [])

    return (
        <StyledWraper>

            {
                library.map((item, index) => {

                    if (item.quatity > 0) {
                        return (
                            <BookCard key={index} product={item} handleBuy={() => handleBuy(index)} />
                        )
                    }
                })
            }

        </StyledWraper>

    )
}

export default ProductList