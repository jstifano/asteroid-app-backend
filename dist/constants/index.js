"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = exports.errors = exports.config = void 0;
exports.config = {
    apiUrl: 'https://api.nasa.gov/neo/rest/v1/feed',
    port: 5000,
    apiKey: 'DEMO_KEY'
};
// Constants containing the error codes and messages
exports.errors = {
    badRequest: {
        error: 'Bad request',
        code: 400
    },
    serverError: {
        error: 'Server error',
        code: 500
    }
};
// Constants containing the responses per each API
exports.responses = {
    getAsteroids: {
        message: 'Asteroids retrieve properly',
        code: 200
    }
};
//# sourceMappingURL=index.js.map