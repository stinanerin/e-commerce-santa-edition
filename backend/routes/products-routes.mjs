import express from "express";

import {
    getProducts,
    getProduct,
} from "../controllers/products-controller.mjs";

const router = express.Router();

// basURlen är i servern, sen i denna movies routes lyssnar vi på resten
router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct);

export default router;
