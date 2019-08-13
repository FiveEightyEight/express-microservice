const axios = require("axios");

exports.getImageDataFromUrl = async (url: string) => {
    const response = await axios({
        method: "GET",
        url,
        responseType: "arraybuffer"
    });
    return response.data;
};