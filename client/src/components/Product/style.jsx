import styled from 'styled-components'

const Product = styled.div`
  .content{
    .carticon{
      position: relative;
      bottom: -102.5%;
      right: 3%;
      background: #fff;
      border-radius: 50px;
      width: 14%;
      padding: 6px 0;
      float: right;
      z-index: 8;
      &:hover{
        background: #3CA0FF	;
      }
    }
    .quantity{
      display: flex;
      position: relative;
      bottom: -110%;
      left: 38%;
      background: #fff;
      opacity: 0.9;
      border: 1px solid grey;
      border-radius: 5px;
      width: 88px;
      height: 30px;
      z-index: 8;
      text-align: center;
      font-size: 20px;
    }
  }
`

export const Optionstyle = styled.div`
  .itemname{
    // float : left;
    // margin: 15px 0px;
  }
  .itemprice{
    // float : left;
    // margin: 15px 0px;
  }
`

export const Option = styled.span`
  .count{
    border: 1px solid grey;
    border-radius: 3px;
    font-size: 14px;
  }
`

export default Product;
