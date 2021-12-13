import http from '../common/http'

const getlist = () => http.get(`fruits/`);
const getdetail = fno => {
    console.log(fno);
    http.get(`fruits/detail/`, fno);}

const FruitService = {
    getlist,
    getdetail,
}

export default FruitService
