const {request, response} = require('express');
const transformDataService  = require('../../service/file/filexlsx')
const finaTuning = require('../../service/file/fineTuningService')


const finetuning = (req, res = response) => {
    res.status(200).json({msg: 'hola mundo'})
}


const tranformJsonl = async(req, res = response) => {
 await transformDataService.transformDate();
 res.status(200).json({msg: 'Construccion del archivo jsonl correcta'});
} 

// carga de archivo
const uploadFile = async(req, res = response) => {
    const response =  await transformDataService.uploadFile();
    res.status(200).send(response.data);
}

const listFile = async(req, res = response) => {
    const response =  await transformDataService.listFile();
    res.status(200).send(response.data);
}

const retrieveFile = async(req,res) => {
    
    const fileId = req.query.fileId;
    
    const response = await transformDataService.retrieveFile(fileId)
    console.log(response)
    if(response === 'Not file'){
        res.status(404).json({msg: response})
    }
    res.status(200).json(response.data)
}

//agregar eliminar file

//fine tuning
const createFineTune = async(req,res) => {
    
    const fileId = req.query.fileId;
    const response = await finaTuning.CreateFineTune(fileId)  
    res.status(200).json(response.data)
}

const listFineTune = async (req, res) => {    
    const response = await fineTuneService.ListFineTune();
    res.status(200).send(response.data);
}

const retrieveFineTune = async (req, res) => {    
    var fineTuneId = req.query["fineTuneId"];
    const response = await fineTuneService.RetrieveFineTune(fineTuneId);
    res.status(200).send(response.data);
}

const cancelFineTune = async(req, res) => {    
    var fineTuneId = req.query["fineTuneId"];
    const response = await fineTuneService.CancelFineTune(fineTuneId);
    res.status(200).send(response.data);
}



module.exports = {
    finetuning,
    tranformJsonl,
    uploadFile, 
    listFile, 
    retrieveFile, 
    createFineTune,
    listFineTune,
    retrieveFineTune,
    cancelFineTune
}