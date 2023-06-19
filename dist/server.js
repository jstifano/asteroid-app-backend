"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./constants");
const asteroidController_1 = require("./controllers/asteroidController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Web Service
app.get('/api/asteroids', asteroidController_1.getAsteroids);
app.listen(constants_1.config.port, () => {
    console.log(`Server is running on port ${constants_1.config.port}`);
});
//# sourceMappingURL=server.js.map