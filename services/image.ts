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

exports.resizeImageData = async (imageData: ArrayBufferLike, height: number, width: number) => {
    return await sharp(imageData).resize(height, width).png().toBuffer();
};