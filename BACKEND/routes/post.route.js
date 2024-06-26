import express from "express"
import { create } from "../controllers/post.controller.js"
import { verifyToken } from "../utils/verifyuser.js";
import { getdata } from "../controllers/post.controller.js"
import { getuserpost } from "../controllers/post.controller.js"

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getdata', getdata);
router.get('/getuserpost', verifyToken , getuserpost);

export default router;