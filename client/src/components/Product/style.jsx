import styled from 'styled-components'

const Product = styled.div`
  .content{
    margin: 0px auto;
    .carticon{
      position: relative;
      bottom: -101.5%;
      right: 3%;
      background: #fff;
      border-radius: 50px;
      width: 14%;
      padding: 8px 0;
      float: right;
      z-index: 8;
      &:hover{
        background: linear-gradient(50deg, #A814E7 30%, #288CD2 80%);
        color: white;
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
    }
  }
`

export const StyledDetail = styled.div`
  .content{
    display: flex;
    width: 1050px;
    margin: 0 auto;
    padding-top: 20px;
  }
  .items_info{
    float: right;
    width: 560px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px solid #f4f4f4;
  }
  .items_info .tit{
    float: left;
    width: 150px;
    font-size: 16px;
    line-height: 20px;
  }
  .items_info .list.fst {
    padding-bottom: 0;
    border-bottom: 0;
  }
  .items_info .list {
    padding: 20px 0;
    border-top: 1px solid #f4f4f4;
  }
  .detail_description{

  }
  p{
    .golist{
      font-size: 20px;
    }
    .items_name {
      float: right;
      width: 560px;
      padding: 10px 0 29px;
      margin: 20px auto;
    }
  }
  span{
    .count{
      border: 1px solid grey;
      border-radius: 3px;
      font-size: 14px;
      width: 150px;
      height: 150px;
    }
  }
  dl{
    display: block;
    margin: 1.2em 0 1.2em 0;
  }
`

export default Product;
