import styled from 'styled-components'

const StyledOrder = styled.div`
    .content{
        width: 1050px;
        margin: 0 auto;
        padding-top: 20px;
    }
    h2{
        text-align: center;
        font-size: 25px;
    }
    h3{
        font-size: 20px;
        margin: 1em 5px;
    }
    p{
        padding: 10px 0;
    }
    .order_goodslist{
        border-top: 1px solid #333;
        padding: 1.5em 10px;
    }
    table.goodsinfo_table{
        width: 100%;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
    }
    tr.orderinfo{
        display: table-row;
    }
    th{
        text-align: left;
        margin: 10px 0;
        height: 40px;
    }
    .goorder{
        text-align: center;
    }
`

export default StyledOrder;