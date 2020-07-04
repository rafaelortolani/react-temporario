import { action, observable } from 'mobx';
import { getCountries, getSummary, ISummary, ICountryB } from '../../apis/corona.api';
import {assign} from '../../utils/object.utils';

export default class CoronaStore {

    @observable countryCode: string = '';
  
    @observable summary?: ISummary;
  
    @observable countries: ICountryB[] = [];
  
    @action handleForm = (event: any, select?: any) => {
      const { name, value } = select || event.target;
      assign(this, name, value);
    }
  
    @action getCountries = async () => {
      try {
        const { data } = await getCountries();
        this.countries = data;
      } catch (error) {
        this.countries = [];
      }
    }
  
    @action getSummary = async () => {
      try {
        const { data } = await getSummary();
        this.summary = data;
      } catch (error) {
        this.summary = undefined;
      }
    }
  }
  const corona = new CoronaStore();
  export { corona };