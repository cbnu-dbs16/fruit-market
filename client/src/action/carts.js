import CartService from '../services/cartservice';

export const AddFriut = async item => {
    try {
      const res = await CartService.addcart(item);
      console.log(res);
      return Promise.resolve(res.data.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const DeleteFruit = async item => {
    try {
      console.log(item);
      const res = await CartService.deletecart(item);
      console.log(res);
      return Promise.resolve(res.data.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const Bringcartlist = async item => {
    try {
      console.log(item);
      const res = await CartService.cartlist(item);
      console.log(res);
      return Promise.resolve(res.data.data);
    } catch (err) {
      return Promise.reject(err);
    }
}