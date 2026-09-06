// Used for getting the operating system information
import * as os from "os";

function getOSInfo() {
    console.log("Operating System Information:");
    console.log(`OS Type: ${os.type()}`);
    console.log(`OS Platform: ${os.platform()}`);
    console.log(`OS Architecture: ${os.arch()}`);
    console.log(`OS Release: ${os.release()}`);
    console.log(`Total Memory: ${os.totalmem()} bytes`);
    console.log(`Free Memory: ${os.freemem()} bytes`);
    console.log(`CPU Info: ${JSON.stringify(os.cpus(), null, 2)}`);
    console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
    console.log("Home directory:", os.homedir());
    console.log("Temporary directory:", os.tmpdir());
}

getOSInfo();