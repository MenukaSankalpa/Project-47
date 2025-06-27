import express from 'express';
import { addSong, listSong } from "../controllers/songController.js";
<<<<<<< HEAD

const songRouter = express.Router();

songRouter.post('/add', addSong);
=======
import upload from '../middleware/multer.js';

const songRouter = express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxCount:1}, {name:'audio',maxCount:1}]), addSong);
>>>>>>> fc0e8e948a35f7919425e40050e6a95e0e434f6d
songRouter.get('/list', listSong);

export default songRouter;

