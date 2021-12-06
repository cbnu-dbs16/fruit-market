import http from '../common/http'

const getlist = () => http.get(`fruits/`);
const getdetail = itemname => http.get(`fruits/detail/`, 1);

const FruitService = {
    getlist,
    getdetail,
}

export default FruitService
