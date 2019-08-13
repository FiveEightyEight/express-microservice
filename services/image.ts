const axios = require("axios");
const sharp = require("sharp");

exports.getImageDataFromUrl = async (url: string) => {
    const response = await axios({
        method: "GET",
        url,
        responseType: "arraybuffer"
    });
    return response.data;
};

exports.resizeImageData = async (imageData: ArrayBufferLike, height: string, width: string) => {
    return await sharp(imageData).resize(height, width).png().toBuffer();
};