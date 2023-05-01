const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/users");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

// ===========getting List of All Contacts =================

router.get("/", ctrl.getAllUsers);

// ============Getting a given Contact by  ID ===============

// router.get("/:contactId", isValidId, ctrl.getContactById);

// =============Adding a Contact =============================

router.post("/", validateBody(schemas.schemaPut), ctrl.addUser);

// ============ Deleting  a Contact ==========================

// router.delete("/:contactId", isValidId, ctrl.removeContact );

// ==============Updating a Contact ===========================

// router.put("/:contactId",isValidId, validateBody(schemas.schemaPut), ctrl.updateContact );

// ==============Favorite status update ============

// router.patch(
//   "/:contactId/favorite",
//   isValidId,
//   validateBody(schemas.schemaPatch),
//   ctrl.updateFavorite
// );

module.exports = router;
