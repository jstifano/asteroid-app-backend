import { GlobalApi } from "../interfaces/api/GlobalApi"

// Generic function to return responses from Services
export const getApiResponse = (payload: GlobalApi) => {
    if(!payload.error) {
        return {
            ...payload,
            message: payload.message,
            code: payload.code
        }
    }

    return {
        error: payload.error,
        code: payload.code
    }
}