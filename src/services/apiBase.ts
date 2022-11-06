import Axios from 'axios';
const BASE_URL = "https://rainy-star.surge.sh"
//use axios and get data from the json file 
export const getWomenClothes = async () => {
    return await Axios.get( BASE_URL +'/products.json')
};
