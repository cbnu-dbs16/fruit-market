import CartService from '../services/cartservice';

export const AddFriut = async data => {
    try {
      const res = await CartService.addcart(data);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const DeleteFruit = async item => {
    try {
      console.log(item);
      const res = await CartService.deletecart(item);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const Bringcartlist = async cus_id => {
    try {
      const res = await CartService.cartlist(cus_id);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}