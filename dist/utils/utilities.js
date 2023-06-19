"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiResponse = void 0;
// Generic function to return responses from Services
const getApiResponse = (payload) => {
    if (!payload.error) {
        return Object.assign(Object.assign({}, payload), { message: payload.message, code: payload.code });
    }
    return {
        error: payload.error,
        code: payload.code
    };
};
exports.getApiResponse = getApiResponse;
//# sourceMappingURL=utilities.js.map