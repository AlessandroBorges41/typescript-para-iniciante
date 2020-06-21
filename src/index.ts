import axios from 'axios';
import UserTable from './table';
import baseUrl from './resources/baseUrl';
import HttpResource from './resources/http-resource';
import { User, Product } from './models';

const userTable = new UserTable();
/* axios.get('https://reqres.in/api/users')
    .then(response => {
        userTable.populate(response.data.data);
    }); */


/* const http = axios.create({
    baseURL: ('https://reqres.in/api/')
}); */

const http = new baseUrl();

const userResource = new HttpResource(http.conexao(),'users');


/* Aqui é definido o tipo Generico que será passado para o list do http-resource 
   no caso é o modelo User
*/
userResource
        .list<{data: User[]}>()
        .then(response => {
                            userTable.populate(response.data.data);
});

const productResource = new HttpResource(http.conexao(), 'products');

productResource
            .list<{data: Product[]}>()
            .then(response => {
                                //userTable.populate(response.data.data);
            });