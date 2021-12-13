import FruitService from '../services/fruitservice';

export const GetList = async () => {
    try {
      const res = await FruitService.getlist();
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}
export default GetList;

