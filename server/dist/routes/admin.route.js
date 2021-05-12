"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../Controllers/users.controller");
const router = express_1.Router();
router.get("/admin", (req, res) => {
    res.status(200).render('admin');
});
router.get("/", users_controller_1.getUsers);
router.get("/:id", users_controller_1.getUserById);
router.post("/", users_controller_1.createUser);
router.delete("/:id", users_controller_1.deleteUser);
router.put("/:id", users_controller_1.updateUser);
exports.default = router;
//# sourceMappingURL=admin.route.js.map