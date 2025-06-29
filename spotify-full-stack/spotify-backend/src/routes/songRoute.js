import express from 'express';
import { addSong, listSong } from "../controllers/songController.js";
import upload from '../middleware/multer.js';


const router = express.Router();

router.post("/add", upload.fields([{name: 'image', maxCount: 1}, {name: 'audio', maxCount: 1}]), addSong);
router.post('/list', listSong);

export default router;



