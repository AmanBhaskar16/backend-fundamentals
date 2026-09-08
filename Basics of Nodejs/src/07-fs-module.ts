// fs - file system module
// It helps in reading and writing files, creating directories, deleting files, etc.

import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const DEMO_FOLDER_PATH = path.join(process.cwd(),'file-system','fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH,'sync-note.txt');
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH,"callback-note.txt");
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH,"promise-note.txt");

type FileResult = { 
    style : string,
    fileName : string,
    content : string,
    sizeInBytes : number
}

// -------------------------------------------
// SYNC APIS

// Use it when you are - writing small startup scripts,build scripts,local demos

// Never use when implementing http res handlers,high traffic apis,background jobs


function ensureDemoFolderExists() : void {
    if(!fs.existsSync(DEMO_FOLDER_PATH)){
        fs.mkdirSync(DEMO_FOLDER_PATH,{recursive:true});
    }
}

function runSyncExample() : FileResult {

    // Write content to a file
    fs.writeFileSync(SYNC_FILE_PATH,"Hello Aman","utf-8");

    // Append text to an existing file
    fs.appendFileSync(SYNC_FILE_PATH,"Next line","utf-8");

    // Read the content of the file
    const content = fs.readFileSync(SYNC_FILE_PATH,"utf-8");
    const stats = fs.statSync(SYNC_FILE_PATH);
    return {
        style : "sync",
        fileName : path.basename(SYNC_FILE_PATH),
        content,
        sizeInBytes : stats.size
    }
}
// OUTPUT : - 
// [
//   {
//     style: 'sync',
//     fileName: 'sync-note.txt',
//     content: 'Hello AmanNext line',
//     sizeInBytes: 19
//   }
// ]

// ---------- Callback file --------------------

function runCallbackExample() : Promise<FileResult> {
    return new Promise((resolve,reject)=>{
        // Writing to a file using callback
        fs.writeFile(CALLBACK_FILE_PATH, "Created using callback fs", "utf-8", (writeError) => {
            if(writeError) {
                reject(writeError);
                return;
            }
            // Append to a file
            fs.appendFile(CALLBACK_FILE_PATH,"\nAppend using callback fs","utf-8",(appendError)=>{
                if(appendError){
                    reject(appendError);
                    return;
                }
                // Reading from a file
                fs.readFile(CALLBACK_FILE_PATH,"utf-8",(readError,content)=>{
                    if(readError){
                        reject(readError);
                        return;
                    }
                    fs.stat(CALLBACK_FILE_PATH,(statError,stats)=>{
                        if(statError){
                            reject(statError);
                            return;
                        }
                        resolve({
                            style : "callback",
                            fileName : path.basename(CALLBACK_FILE_PATH),
                            content,
                            "sizeInBytes" : stats.size,
                        });
                    })
                })
            })
        });
    })
}

// ------------- Promise File ------------------

async function runPromiseExample() : Promise<FileResult> {
    // writing
    await fsPromises.writeFile(PROMISE_FILE_PATH,"Created using promise fs","utf-8");

    // Appending
    await fsPromises.appendFile(PROMISE_FILE_PATH,"\nAppended using promise fs","utf-8");

    const content = await fsPromises.readFile(PROMISE_FILE_PATH,"utf-8");
    const stats = await fsPromises.stat(PROMISE_FILE_PATH);

    return {
        style : "Promises",
        fileName : path.basename(PROMISE_FILE_PATH),
        content,
        sizeInBytes : stats.size
    }
}

async function main() : Promise<void>{
    try {
        ensureDemoFolderExists();
        // const syncResult = runSyncExample();
        // console.log([syncResult]);
        // const callbackResult = await runCallbackExample();
        // console.log([callbackResult]);
        // const promiseResult = await runPromiseExample();
        // console.log([promiseResult]);
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Unknown Error";
        console.error("File system error : ",msg);
    }
}

main();