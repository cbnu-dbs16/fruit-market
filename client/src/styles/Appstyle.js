import styled from 'styled-components'

const App = styled.div`
    .App{
        // position: relative;
        min-width: 1050px;
        max-width: 1500px;
        background-color: #fff;
        margin: 0px auto;
        .header{
            .logo{
                float :left;
            }
            .account{
                float: right;
            }
        }
        .gnb {
            background-color: white;
            text-align: center;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 28px 0px;
            .list_nav{
                display: block;
                margin: 1em auto;
                .nav_item {
                    color: black;
                    display: inline-flex;
                    margin: 10px 80px;
                    text-align: center;
                    .nav {
                      font-size: 1rem;
                    }
                }
                .active{
                    color: #14148C;
                    font-weight: bold;
                }
            }      
        }
        .container{
            margin: 0px auto;
            max-width: 30rem;
            text-align: center;
        }
    } 
`

export default App