import styled from 'styled-components'

const StyledCart = styled.div`
    .content{
        width: 1050px;
        margin: 0 auto;
        padding-top: 20px;
        .cart_select {
            position: static;
            height: auto;
            padding: 0 0 30px 0;
            border-bottom: 1px solid #ddd;
        }
        .inner_select {
            position: static;
            padding: 0 10px 0 2px;
            // border-bottom: 1px solid black;
            margin: 0 30px;
        }
    }
    h2{
        font-weight: 600;
        font-size: 28px;
        color: #333;
        line-height: 35px;
        text-align: center;
        letter-spacing: 1px;
        padding: 2rem 0;
    }
    label{
        font-weight: 700;
        font-size: 14px;
        margin: 0 10px;
    }
    a{
        font-weight: 700;
        font-size: 14px;
        margin: 0 10px;
    }
    span{
        margin: 0 5px;
    }
    hr{
        // margin: 1.5em 0;
        // color: grey;
    }
`

export const StyledEachItem = styled.div`
    ul{

    }
    li{
        display: flex;
        border-bottom: 1px solid #f4f4f4;
        padding: 10px 0;
        margin-top: -12px;
    }
    .item{
        display: flex;
        min-height: 128px;
        padding: 0;
        position: relative;
    }
    .inner_name{
        width: 5em;
        margin: auto 3em;
    }
    .price{
        width: 23em;
        margin: auto 3em;
    }
    label{
        margin: auto 3em;
    }
    span{
        margin: auto 3em;
        border: 1px solid #e1e1e1;
        width: 88px;
        height: 30px;
        border-radius: 3px
    }
    
`

export default StyledCart;