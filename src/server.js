import express from "express";
import helmet from "helmet";
import cors from "cors";

import userRoutes from "./user.routes";
import mainRoutes from "./main.routes";
import rateLimit from "express-rate-limit";
import compression from "compression";

const app = express();
const port = 4000;

const limiter = rateLimit({
    windowMs: 60 * 1000, //1 minutes
    max: 100, // limit each up to 100 requests per window (here 1 minutes)
});

app.use(compression());
//Apply the rate limiting middleware to API Calls only
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
