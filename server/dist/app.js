"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const admin_route_1 = __importDefault(require("./routes/admin.route"));
dotenv_1.default.config();
const app = express_1.default();
exports.port = process.env.PORT || 5200;
app.set('port', exports.port);
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/users", admin_route_1.default);
app.get('/', (req, res) => {
    res.render('index');
});
exports.default = app;
//# sourceMappingURL=app.js.map