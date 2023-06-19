import { GlobalApi } from "../interfaces/api/GlobalApi"

export const config = {
    apiUrl: 'https://api.nasa.gov/neo/rest/v1/feed',
    port: 5000,
    apiKey: 'DEMO_KEY'
}

// Constants containing the error codes and messages
export const errors = {
    badRequest: {
        error: 'Bad request',
        code: 400
    },
    serverError: {
        error: 'Server error',
        code: 500
    }
}

// Constants containing the responses per each API
export const responses = {
    getAsteroids: { 
        message: 'Asteroids retrieve properly',
        code: 200
    }
}