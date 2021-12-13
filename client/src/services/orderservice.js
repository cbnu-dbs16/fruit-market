import http from '../common/http'

const orderlist = cus_id => http.get(`orderlist/`, 1);

const OrderService = {
    orderlist
}

export default OrderService;
