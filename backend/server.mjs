import express from "express";
// import dotenv from "dotenv";
import cors from "cors";

import productRouter from "./routes/products-routes.mjs";

// dotenv.config({ path: "./config/.env" });
const app = express();

/* ******************* Middleware******************* */

app.use(cors());

app.use("/api/v1", productRouter);

/* ************************************************* */

const PORT = 3000;

app.listen(PORT, () =>
    console.log(
        `Server accessible through http://localhost:${PORT}/api/v1/products`
    )
);
