import OrderService from '../services/orderservice'

export const BringOrderlist = async cus_id => {
    try {
      const res = await OrderService.orderlist(cus_id);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export default BringOrderlist;