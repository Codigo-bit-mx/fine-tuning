const OpenAI = require("openai");

const openai = new OpenAI();

async function CreateFineTune(fileId){
    
    try{
        const response = await openai.fineTunes.create({
            training_file: fileId,
            model: "gpt-3.5-turbo-0613",
        });
        return response;
    }catch(e){
        return {status: 400, data: e} 
    }
}


async function ListFineTune(){
    
    try{
        const response = await openai.fineTunes.list();
        return response;
    }catch(e){
        return {status: 400, data: e}
    }
}

async function RetrieveFineTune(fineTuneId){
    
    try{
        const response = await openai.fineTune.retrieve(fineTuneId);
        return response;
    }catch(e){
        return {status: 400, data: e}
    }
}

async function CancelFineTune(fineTuneId){
    
    try{
        const response = await openai.fineTune.cancel(fineTuneId);
        return response;
    }catch(e){
        return {status: 400, data: e}
    }
}

// async function DeleteModelFineTune(model){  probar
    
//     try{
//         const response = await openai.deleteModel(model);
//         return response;
//     }catch(e){
//         return {status: 400, data: e}
//     }
// }


module.exports = {
    CreateFineTune,
    ListFineTune,
    RetrieveFineTune,
    CancelFineTune,
    
}

