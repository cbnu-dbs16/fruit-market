import http from '../common/http'

const getlist = () => http.get(`fruitlist/`);
const getdetail = itemname => http.get(`detail/`, itemname);

const FruitService = {
    getlist,
    getdetail,
}

export default FruitService
