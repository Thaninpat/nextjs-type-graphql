"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const createServer_1 = __importDefault(require("./createServer"));
const { PORT, DB_USER, DB_PASSWORD, DB_NAME, FRONTEND_URI } = process.env;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ghzsn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Data connected');
        const app = express_1.default();
        app.use(cookie_parser_1.default());
        const server = await createServer_1.default();
        server.applyMiddleware({
            app,
            cors: { origin: FRONTEND_URI, credentials: true },
        });
        app.listen({ port: PORT }, () => console.log(`Server is ready at http://localhost:${PORT}${server.graphqlPath}`));
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
//# sourceMappingURL=index.js.map