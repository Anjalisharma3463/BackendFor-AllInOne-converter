import multer = require('multer');
import ConvertController from '../controller/ConvertController';
import express from 'express';
 const router =  express.Router(); 
const upload = multer();
router.post('/convert', upload.single('file'), ConvertController);

export default router;