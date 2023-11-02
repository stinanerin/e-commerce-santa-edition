import fetchData from "../utils/fetch.mjs";

export const listMovies = async (req, res) => {
    const page = req.query.page !== undefined ? req.query.page : 1;
    const response = await fetchData("discover/movie", page);

    res.status(response.statusCode).json(response);
};

export const getProducts = async (req, res) => {
    const response = await fetchData();

    res.status(response.statusCode).json(response);
};

export const getProduct = async (req, res) => {
    const id = req.params.id;
    const response = await fetchData(id);

    res.status(response.statusCode).json(response);
};
