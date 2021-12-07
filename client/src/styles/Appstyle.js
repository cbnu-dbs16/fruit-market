import styled from 'styled-components'

const App = styled.div`
    .App{
        width: 100vw;
        background-color: #fff;
        .header{
            .logo{
                float :left;
            }
            .account{
                float: right;
                p{
                    padding: 0 8px;
                }
                ul{
                    display: flex;
                    margin: 12px 12px 0 0;
                }
                li{
                    :after {
                        content: "";
                        float: right;
                        width: 1px;
                        height: 13px;
                        background-color: #d8d8d8;
                    }
                }
            }
        }
        .gnb {
            background-color: white;
            text-align: center;
            position: relative;
            width: 100vw;
            z-index: 10;
            box-shadow: rgba(100, 100, 111, 0.1) 0px 5px 5px 0px;
            .list_nav{
                display: block;
                margin: 1em auto;
                .nav_item {
                    color: black;
                    display: inline-flex;
                    margin: 10px 50px;
                    text-align: center;
                    .nav {
                      font-size: 1rem;
                    }
                }
                .active{
                    color: #1E82CD;
                    font-weight: bold;
                }
            }      
        }
    } 
`

export default App