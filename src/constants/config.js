export const APP_NAME = 'Doggi App';
const BACKEND_VERSION = '/api/v1.0';

export const config = {
    baseUrl: 'https://doggi-app-backend.herokuapp.com',
    backendVersion: '/api/v1.0',
    endpoints: {
        dogBreeds: `${BACKEND_VERSION}/dogbreeds/`
    },
    defaultHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}
