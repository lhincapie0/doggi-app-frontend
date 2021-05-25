import { config } from '../constants/config'
import { HTTP_METHODS } from "../constants/constants";
import axios from "axios";
import URI from 'urijs';

class CountriesApi {
    constructor(_config) {
        this._config = _config;
    }

    getCountries = () => {
        const endpoint = new URI(this._config.countriesBaseUrl).path(this._config.endpoints.countries).toString();
        return axios({
            url: endpoint,
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });
    };

}

const countriesApi = new CountriesApi(config);
export default countriesApi;
