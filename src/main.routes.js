import express from "express";

const router = express.Router();

router.get('/ping', (req,res) => {
    res.status(StatusCodes.CREATED);
    res.send("OKAY");
});

export default router;