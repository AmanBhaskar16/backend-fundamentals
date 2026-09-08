// Buffers - raw binary data
// binary data means - when you have your data stored in bytes


// Where can you use buffers - Reading files,receiving http req body,working with streams , handling images,pdf files,videos,encrypt and hashing

// Js strings are good for normal text but buffers for raw binary data

const textBuffer = Buffer.from("AMAN");
// Each letter is 1 byte
console.log(textBuffer);

console.log(textBuffer.toString("utf-8"));
console.log(textBuffer.length); // length of buffer

// Allocating buffer
const fixedBuffer = Buffer.alloc(5);
console.log("Empty fixed Buffer : ",fixedBuffer);

fixedBuffer.write("API");

console.log("Fixed buffer after write : ",fixedBuffer);
console.log("Fixed buffer text : ",fixedBuffer.toString("utf-8"));

// Chunks
const chunks = [
    Buffer.from("Hello"),
    Buffer.from("Node"),
    Buffer.from("JS")
]

const combineBuffer = Buffer.concat(chunks);
console.log("Combine buffer chunk : ",combineBuffer);
console.log("combine buffer text : ",combineBuffer.toString("utf-8"));