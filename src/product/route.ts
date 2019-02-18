import express from "express";
const router = express.Router();
import * as ctrl from "./controller";

router.get('/:id', ctrl.getById);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.deleteOne);
router.get('/', ctrl.get);
router.post('/', ctrl.post);

export default router;