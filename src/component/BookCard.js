import style from 'styled-components'

const StyleWraper = style.div`
    max-width : 160px;
    padding: 6px 6px;
    overflow: hidden;
    
    img {
        width : 100%;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.25);
        border-radius: 10px;


    }
    
    .card-content{
        margin : 5px 0px;
        border-radius: 2px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.25); 
   
    }
    
    .card-detail{
        
        p, h4 {
            margin : 0;
            padding : 0px 5px;
        }

        .card-price{
            display: flex;
            justify-content: space-between;
        }
        padding-bottom: 5px;
        
    }

    .card-bottom{
        text-align: center;  
        padding : 4px 0;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.25); 
        &:hover{
            background-color: rgba(0,0,0,.15)
        }
    }
  }

`


const BookCard = (props) => {
    const { handleBuy } = props

    const { img, bname, wname, type, quatity, price } = props.product   

    return (
        <div>

            <StyleWraper>
                <img src={img} />
                <div className="card-content" >
                    <div className="card-detail">
                        <h4>{bname}</h4>
                        <p>{wname}</p>
                        <p>{type}</p>
                        <div className="card-price">
                            <p>เหลือ {quatity}</p>
                            <p>{price} บาท</p>
                        </div>
                    </div>
                </div>
                <div className="card-bottom" onClick={handleBuy} >Add to cart</div>
            </StyleWraper>
        </div>
    )
}

export default BookCard