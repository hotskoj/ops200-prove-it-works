import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});