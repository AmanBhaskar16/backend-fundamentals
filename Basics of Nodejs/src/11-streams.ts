//  Streams are used when you want to handle the data piece by piece not at once

// Read large files,upload files,download files,video/audio processing,compression

// CHUNKS

// Here is my full 500mb file
// here is chunk 1
// here is chunk 2
// here is chunk 3

// memory efficient

// Streams types
// readable stream - source of data
// writable stream - destination where the data is written
// transform stream - read the data,change it and pass that forward

// --------------- Readable streams ----------------

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

const readableStream = Readable.from(["hello"," Aman"," this"," side."]);

// ------------- Tranform streams -----------------

const uppercaseTransform = new Transform({
    transform(chunk,encoding,callback){
        const text = chunk.toString();
        callback(null,text.toUpperCase());
    }
})

// --------------- Writable Streams ----------------

const writableStream = new Writable({
    write(chunk,encoding,callback){
        console.log("Received chunk : ",chunk.toString());
        callback();
    }
})

async function main() : Promise<void> {
    try {
        await pipeline(readableStream,uppercaseTransform,writableStream);
        console.log("Stream completed");
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Unknown error";
        console.error("Stream error : ", msg);
    }
}

main();