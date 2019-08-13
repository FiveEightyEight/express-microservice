const express = require("express");
const app = express();
const port = 3000;

// Services
const { checkForParams } = require("./services/security");
const { getImageDataFromUrl, resizeImageData } = require("./services/image");

app.get("/", async (req: any, res: any, next: any) => {

    const { height, width, image }: { height: string, width: string, image: string } = req.query;

    try {
        // Check if all params are filled out
        checkForParams({height, width, image});

        // Get the image data from the url
        const imageData: ArrayBufferLike = await getImageDataFromUrl(image);
        console.log(imageData)
        // Resize the image data and return it
        const resizedImage = await resizeImageData(imageData, parseInt(height), parseInt(width));

        res.json(resizedImage);
    } catch (err) {
        next(err);
    };
});

app.use((err: any, req: any, res: any) => {
    // error handler
    res.status(500).json({
        success: false,
        message: err.message
    });
});

app.listen(port, () => {
    console.log("listening on port: ", 3000);
});
// module.exports = {app,};;