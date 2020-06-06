import { getPrice } from '../../apis/economy.api';
import {action, observable} from 'mobx';

export default class HomeStore{
    @obsevable records: any[] = [];

    @action buildRecords = async () => {
        try{
            const {data }  = await getPrince();
            this.records = Object.values(data);
        } catch(error){
            this.records = [];
            throw new Error ('Falha a obter cotacao');
        }
        
    }
}

const home = new HomeStore();
export {home};