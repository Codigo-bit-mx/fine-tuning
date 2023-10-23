let xlsx = require('xlsx');
const fs = require('fs');
const OpenAI = require("openai");

const openai = new OpenAI();

const transformDate = async () => {
    let workbook = xlsx.readFile('shared/data-set.xlsx');
    let sheet_name_list = workbook.SheetNames;
    let xlDate = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    for( const item of xlDate ) {
        let object = `{"prompt": "${item.Question} ->", "completion": "${item.Answer} END"}`
    
        await fs.appendFileSync("shared/data-set.jsonl", object, "utf8", function(){})
        await fs.appendFileSync("shared/data-set.jsonl", "\r\n", "utf8", function(){})
    } 
}

async function uploadFile(){    
    //const response = await openai.createFile(fs.createReadStream("src/shared/data-set.jsonl"), "fine-tune");
    const response = await openai.files.create({ file: fs.createReadStream('shared/data-set.jsonl'), purpose: 'fine-tune' });
    return response;
}

async function listFile(){    
    //const response = await openai.createFile(fs.createReadStream("src/shared/data-set.jsonl"), "fine-tune");
    const response = await openai.files.list();
    return response;
}

async function retrieveFile(fileId){
    try {
        const response = await openai.files.retrieve(fileId)
        console.log(response)
        return response
    } catch (error) {
        return "Not file"
    }
}

// agregar eliminar falta

module.exports = {
    transformDate, 
    uploadFile,
    listFile,
    retrieveFile
}