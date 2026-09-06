// Process object is a global object in Node.js that provides information about the current Node.js process and allows you to interact with it. It is an instance of the EventEmitter class and can be accessed using the global variable process.

// The process object provides various properties and methods that allow you to retrieve information about the current process, such as its ID, version, platform, memory usage, and more. It also allows you to handle events related to the process, such as exit events or uncaught exceptions.

import process from 'process';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file,agar process.env.PORT ko access karna hai to isko use karna padega kyunki process.env.PORT ko access karne ke liye hume environment variable ko load karna padega, aur iske liye dotenv package ka use karte hai.

// Here are some commonly used properties and methods of the process object:

// --------------------------------------------------------------------------------------------------------------------------------------------------
// 1. process.argv: An array containing the command-line arguments passed to the Node.js process. The first element is the path to the Node.js executable, and the second element is the path to the script being executed. Any additional arguments are included in subsequent elements of the array.

console.log('Command-line arguments:', process.argv); 
// To check it :- npm run start --port=3000 , 
// output :- process.argv: [ 
// 'C:\\Program Files\\nodejs\\node.exe', 
// 'C:\\Users\\LENOVO\\Full stack projects\\backend-fundamentals\\Basics of Nodejs\\src\\01-process-object.ts', 
// '--port=3000' 
// ]
// --------------------------------------------------------------------------------------------------------------------------------------------------

// 2. process.env: An object containing the user environment variables. You can access environment variables using process.env.VARIABLE_NAME.
console.log('Environment variables:', process.env.PORT);

// NOTE : - THESE process.env variables are either string or undefined. So, if you want to use them as a number, you need to convert them to a number using the Number() function or parseInt() function. For example, if you want to use process.env.PORT as a number, you can do it like this:

// const port: number = Number(process.env.PORT) || 3000;
// console.log('Port:', port);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 3. process.exit([code]): A method that terminates the Node.js process with an optional exit code. If no code is provided, the default exit code is 0 (indicating a successful exit).
setTimeout(() => {
  console.log('Exiting the process...');
  process.exit(0);
}, 2000);

// NOTE : - in exit ,always use sync methods like final logs,cleanup etc never async like setTimeout, setInterval, etc. because when you call process.exit(), it will terminate the process immediately and any pending asynchronous operations will not be completed. So, if you have any asynchronous code that needs to be executed before the process exits, you should use synchronous methods instead.


// --------------------------------------------------------------------------------------------------------------------------------------------------
// 4. process.on(event, listener): A method that allows you to register event listeners for various process events, such as 'exit', 'uncaughtException', or 'SIGINT'.

process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// 5. process.pid: A property that returns the process ID of the current Node.js process.
console.log('Process ID:', process.pid);
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);