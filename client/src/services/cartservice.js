import http from '../common/http'

const addcart = data => http.post(`cart/`, data);   // userid, fruitid
const deletecart = item => http.delete(`cart/`, item);  // userid, fruitid
const cartlist = cus_id => http.get(`cartList/`, 1);   // userid

const CartService = {
    addcart,
    deletecart,
    cartlist
}

export default CartService
