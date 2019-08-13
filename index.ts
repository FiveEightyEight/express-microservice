const express = require("express");
const app = express();
const port = 3000;

// Services
const { checkForParams } = require("./services/security");

app.get("/", (req: any, res: any, next: any) => {

    const { height, width, image }: { height: string, width: string, image: string } = req.query;

    try {
        // Check if all params are filled out
        checkForParams({height, width, image});

        // Get the image data from the url


        // Resize the image data and return it
        
        res.json({ height, width, image });
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