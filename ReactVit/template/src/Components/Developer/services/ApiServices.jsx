import axios from "axios";
const BASE_URL="http://localhost:5000"
class ApiServices{
    
    allBrand(){
        return axios.get(BASE_URL+"/api/brand/all",{})
    }

}

export default new ApiServices;