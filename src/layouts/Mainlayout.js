import Navbar from "../component/Navbar"
import styled from 'styled-components'

const Stylewrap = styled.div`
    .children{
        margin-top : 15px;
        padding: 0px 150px;
    }


`

const Mainlayout = (props) => {
    return (
        <Stylewrap>
            <Navbar />
            <div className="children" >

            {props.children}
            </div>
        </Stylewrap>
    )
}

export default Mainlayout