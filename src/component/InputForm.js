import React, { useState } from 'react'
import style from 'styled-components'

const StyleWrap = style.div`
    margin : 15px 0px;
    width : 500px;
    box-shadow: 0 0 6px rgba(0,0,0,.15);
    border-radius: 10px;
    

    form{
        padding: 10px ;

        input{
            padding: 4px 8px;
            margin: 8px;

        }

        .btn{
            text-align: center;
            padding: 4px 8px;
            margin: 8px;
            border: 1px solid;
            border-radius: 8px;
            width: 70px;
            cursor: pointer;
            background-color: rgba(26,226,46,.15);

        }
        .btn:hover{
            background-color: rgba(226,26,46,.15);

        }
    }
`

const InputForm = (props) => {

    const { Createbook } = props

    const [formBook, setFormbook] = useState({
        wname: "",
        bname: "",
        type: "",
        quatity: 0,
        price: 0,
        img: ""
    })

    const handleChangeFile = (e) => {
        const render = new FileReader()

        render.onload = e => {
            setFormbook({ ...formBook, img: e.target.result })
        }

        if (e.target.files[0])
            render.readAsDataURL(e.target.files[0])
    }

    console.log(formBook);


    return (
        <StyleWrap>
            <form >
                <div>
                    <label>ชื่อหนังสือ  </label>
                    <input onChange={e => setFormbook({ ...formBook, bname: e.target.value })}></input><br />
                </div>
                <div>
                    <label>ชื่อผู้แต่ง  </label>
                    <input onChange={e => setFormbook({ ...formBook, wname: e.target.value })}></input><br />
                </div>
                <div>
                    <label>ชนิดหนังสือ  </label>
                    <input onChange={e => setFormbook({ ...formBook, type: e.target.value })}></input><br />
                </div>
                <div>
                    <label>จำนวน  </label>
                    <input onChange={e => setFormbook({ ...formBook, quatity: e.target.value })}></input><br />
                </div>
                <div>
                    <label>ราคา  </label>
                    <input onChange={e => setFormbook({ ...formBook, price: e.target.value })}></input><br />
                </div>
                <div>
                    <input type="file" accept="image/*" onChange={handleChangeFile} ></input><br />
                </div>


                <div className="btn" onClick={() => Createbook(formBook)} >เพิ่มสินค้า</div>
            </form>
        </StyleWrap>
    )
}

export default InputForm