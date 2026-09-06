// After some delay, we can execute a function using setTimeout
setTimeout(() => {
  console.log("This message is displayed after a delay of 2 seconds.");
}, 2000);

// We can also execute a function repeatedly at specified intervals using setInterval
const intervalId = setInterval(() => {
  console.log("This message is displayed every 1 second.");
}, 1000);

// To stop the repeated execution, we can use clearInterval
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped the repeated execution after 5 seconds.");
}, 5000);

// We can also use setImmediate to execute a function immediately after the current event loop phase
setImmediate(() => {
  console.log("This message is displayed immediately after the current event loop phase.");
});