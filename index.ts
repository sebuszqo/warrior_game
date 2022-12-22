import * as express from "express";
import * as methodOverride from "method-override";

const app = express();

app.use(methodOverride('_method'));

