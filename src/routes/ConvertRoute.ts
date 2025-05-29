

 
 
import multer = require('multer');
import ConverterController from '../controller/ConverterController';
import express from 'express';
 const router =  express.Router(); 
const upload = multer();


router.post('/convert', upload.single('file'), ConverterController);

export default router;