import express = require('express');
import {urlencoded} from "express";
import cookieParser from "cookie-parser";
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
 app.listen(3000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
app.init();
// const csrf = async(req: Request, res: Response, next) => {
//
// }
// app.use('/dashboard', csrf);

app.get("/", (req, res) => {
    res.send("Hello World!");
})



