import FruitService from '../services/fruitservice';

export const GetDetailItem = async itemname => {
    try {
      const res = await FruitService.getdetail(itemname);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}
export default GetDetailItem;

