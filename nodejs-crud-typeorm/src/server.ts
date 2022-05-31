import express = require("express");
import "reflect-metadata";
//import "./migrations"
import {routes} from "./routes"

require('dotenv').config()

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log("Server running"))

