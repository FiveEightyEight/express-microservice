const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any, next: any) => [

]);

app.use( (req: any, res: any, next: any) => {
// error handler
});

app.listen(port, () => {
    console.log("listening on port: ", 3000);
});
// module.exports = {app,};;