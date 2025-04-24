import express from 'express';
import { addSong, listSong } from "../controllers/songController.js";
import upload from '../middleware/multer.js';

const songRouter = express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxCount:1}, {name:'audio',maxCount:1}]), (req, res, next) => {console.log("POST /add hit");
    next();
}, addSong);
songRouter.get('/list', listSong);

export default songRouter;

