import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyWrap = styled.div`
    display : flex;
    heiht: 40px;
    align-items: center;
    box-shadow: 0 2px 8px  rgba(0,0,0,.15);   

    justify-content: space-between;
    
    .logo {
        display: flex;
        align-items: center;
        margin-left: 30px;
        cursor: pointer;

        img{
            border-radius: 50%;
            width: 38px;
            height: 38px;
            padding: 3px
        }

    }
    
    .menu{
        display: flex;
        cursor: pointer;
        margin-right: 10px;
    }
    .menu.selected{
        color: red;
    }

`

const Navbar = () => {

    const router = useRouter()
    const a = 1;
    const current = router.pathname.split('/')[1]
    console.log(current);


    return (
        <StyWrap>
            <Link href="/" >
                <div className="logo">
                    <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-book-illustration-for-class-study-png-image_4644764.jpg" />
                    <h3>Book Market</h3>
                </div>
            </Link>
            <div className={`menu `} >
                <Link href="/addbook" >
                    <div className={` menu ${current === "addbook" && "selected"}`}>
                        <h3>Profile</h3>
                    </div>
                </Link>
                <Link href="/manage" >
                    <div className={` menu ${current === "manage" && "selected"}`} >
                        <h3>Manage</h3>
                    </div>
                </Link>

            </div>

        </StyWrap>
    )
}

export default Navbar