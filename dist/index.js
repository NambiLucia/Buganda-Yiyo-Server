"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const User_route_1 = __importDefault(require("./Routes/User.route"));
const app = (0, express_1.default)();
const PORT = 4200;
//middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//middleware for endpoints
app.use('/api/v1/users', User_route_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Buganda Yiyo, Buganda Yange server!');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
