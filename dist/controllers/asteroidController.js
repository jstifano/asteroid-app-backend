"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsteroids = void 0;
const constants_1 = require("../constants");
const utilities_1 = require("../utils/utilities");
const axios_1 = __importDefault(require("axios"));
/**
 * Function to retrieve the list of asteroids filtered by start_date and end_date
 * @param start_date Start date for calculating the range of near_earth_objects array
 * @param end_date End date for calculating the range of near_earth_objects array
 * @return Array of asteroids --> Asteroid[]
 */
const getAsteroids = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { start_date, end_date } = req.query;
        // Start date or end_date don't exit, we return an error
        // We could include here more validations for dates if they are not valid, etc, not only if they don't exist
        if (!start_date || !end_date) {
            res.status(constants_1.errors.badRequest).json((0, utilities_1.getApiResponse)(constants_1.errors.badRequest));
        }
        const response = yield axios_1.default.get(`${constants_1.config.apiUrl}?start_date=${start_date}&end_date=${end_date}&api_key=${constants_1.config.apiKey}`);
        const asteroids = response === null || response === void 0 ? void 0 : response.data;
        if (!asteroids) {
            res.status(constants_1.errors.serverError.code).json((0, utilities_1.getApiResponse)(Object.assign({ error: `${constants_1.errors.serverError}: ${response.error}` }, constants_1.errors.serverError)));
        }
        res.status(constants_1.responses.getAsteroids.code).json((0, utilities_1.getApiResponse)(Object.assign({ asteroids: asteroids }, constants_1.responses.getAsteroids)));
    }
    catch (e) {
        res.status(constants_1.errors.serverError.code).json((0, utilities_1.getApiResponse)(Object.assign({ error: `${constants_1.errors.serverError}: ${e.response.data.error_message}` }, constants_1.errors.serverError)));
    }
});
exports.getAsteroids = getAsteroids;
//# sourceMappingURL=asteroidController.js.map