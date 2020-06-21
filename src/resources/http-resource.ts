import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { User } from '../models'; //import o Modelo


export default class HttpResource{

    constructor(protected http: AxiosInstance, protected resource: string){ }

    //Poderia ser um liste com a declaração do tipo do modelo User, para para tornar mais generico e aceitar outro modelos
    //Usamos como o declarado abaixo
    /* list(): Promise<AxiosResponse<{ data: User[]}>>{ //Generic - mas utiliza por meio do AxiosResponse um modelo User
       return  this.http.get(this.resource);
    } */
    list<T = any>(): Promise<AxiosResponse<T>>{ //Generic - Aceitando qualquer modelo de chegada na Promisse
        return  this.http.get(this.resource);
     }

    
    create(){}
    
    update(){}

    delete(){}

}