import http from '../common/http'

const addcart = item => http.post(`cart/`, item);   // userid, fruitid
const deletecart = item => http.delete(`cart/`, item);  // userid, fruitid
const cartlist = userid => http.get(`cartList/`, userid);   // userid

const CartService = {
    addcart,
    deletecart,
    cartlist
}

export default CartService
