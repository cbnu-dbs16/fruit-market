import styled from 'styled-components'

const StyledCart = styled.div`
    .content{
        // display: flex;
        width: 1050px;
        margin: 0 auto;
        padding-top: 20px;
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