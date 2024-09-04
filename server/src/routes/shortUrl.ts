
import express from "express";
import { createUrl, deleteUrl, getAllUrls, getUrl } from "../controllers/shortUrl";

const router = express.Router();

router.get('/allUrls', getAllUrls)
router.post('/createUrl', createUrl)
router.get('/getUrl/:id',getUrl)
router.delete('/getUrl/:id',deleteUrl)

export default router;