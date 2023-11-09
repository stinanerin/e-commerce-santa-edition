import fs from "fs";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const fetchData = async (id = null) => {
    const response = {
        status: "Not found",
        statusCode: 404,
        data: null,
        error: null,
    };

    const dataPath = path.join(__dirname, "..", "data", "mock-data.json");
    const rawData = fs.readFileSync(dataPath);
    const data = JSON.parse(rawData);

    if (id) {
        const product = data.find((item) => item.id === +id);
        if (!product) {
            response.error = `Product with id ${id} not found`;
            return response;
        }

        response.status = "Success";
        response.statusCode = 200;
        response.data = product;
    } else {
        response.status = "Success";
        response.statusCode = 200;
        response.data = data;
    }
    return response;
};

export default fetchData;
