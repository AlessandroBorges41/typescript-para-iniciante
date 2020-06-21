import axios,  { AxiosInstance} from 'axios';


export default class baseUrl{

    constructor(){
        
    }

    conexao(){
        return axios.create({ baseURL: ('https://reqres.in/api/')});
    }

}


