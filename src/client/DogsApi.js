import { config } from '../constants/config'
import { HTTP_METHODS } from "../constants/constants";
import axios from "axios";
import URI from 'urijs';

class DogsApi {
    constructor(_config) {
        this._config = _config;
    }

    getDogBreeds = () => {
        const endpoint = new URI(this._config.baseUrl).path(this._config.endpoints.dogBreeds).toString();
        return axios({
            url: endpoint,
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });

        return axios({
            url: endpoint.valueOf(),
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });
    };

    getDogColors = () => {
        const endpoint = new URI(this._config.baseUrl).path(this._config.endpoints.colors).toString();
        return axios({
            url: endpoint,
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });

        return axios({
            url: endpoint.valueOf(),
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });
    };

    getDogNatures = () => {
        const endpoint = new URI(this._config.baseUrl).path(this._config.endpoints.natures).toString();
        return axios({
            url: endpoint,
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });

        return axios({
            url: endpoint.valueOf(),
            method: HTTP_METHODS.GET,
            headers: Object.assign({}, this._config.defaultHeaders),
        });
    };


}

const dogsApi = new DogsApi(config);
export default dogsApi;
