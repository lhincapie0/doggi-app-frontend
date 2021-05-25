export const APP_NAME = 'Doggi App';
const BACKEND_VERSION = '/api/v1.0';

export const config = {
    baseUrl: process.env.API || 'https://doggi-app-backend.herokuapp.com',
    countriesBaseUrl: 'https://countries-backend-api.herokuapp.com',
    backendVersion: '/api/v1.0',
    endpoints: {
        dogBreeds: `${BACKEND_VERSION}/dogbreeds/`,
        dogBreed: `${BACKEND_VERSION}/dogbreeds/{id}`,
        colors: `${BACKEND_VERSION}/colors/`,
        natures: `${BACKEND_VERSION}/natures/`,
        countries: `${BACKEND_VERSION}/countries/`,
    },
    defaultHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}
