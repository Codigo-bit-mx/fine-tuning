const { Router } = require('express');
const { finetuning,
        tranformJsonl,
        uploadFile,
        listFile,
         retrieveFile, 
         createFineTune } = require ('../controllers/finetunningController/finetuning')

const router = Router();

router.get('/', finetuning);

router.post('/transformdata', tranformJsonl);

router.post('/uploadfile', uploadFile);

router.get('/list-file', listFile);

router.get('/retriver', retrieveFile);

router.post('/createfinetune', createFineTune)

module.exports = router