import FruitService from '../services/fruitservice';

export const GetDetailItem = async fno => {
    try {
      const res = await FruitService.getdetail(fno);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}
export default GetDetailItem;

