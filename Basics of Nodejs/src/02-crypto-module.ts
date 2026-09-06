import crypto from 'crypto';

// Built in nodejs module to generate random bytes and convert them to a hexadecimal string

// Used for : - 
// 1. Security related tasks like generating secure tokens, passwords, or cryptographic keys.
// 2. Creating random UUID,IDs
// 3. Hashing data for integrity checks or password storage.
// 4. encrypting and decrypting data for secure communication.

// Generate a random string of bytes and convert it to a hexadecimal representation -> password reset token,email verification token,session secret,api key etc
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log(`Random Bytes: ${randomBytes}`);

// Generate a random UUID (Universally Unique Identifier) -> user id,order id,session id etc
const randomUUID = crypto.randomUUID();
console.log(`Random UUID: ${randomUUID}`);

// Hashing data using SHA-256 algorithm -> password hashing, data integrity checks etc
const dataToHash = 'Hello, World!';
const hash = crypto.createHash('sha256').update(dataToHash).digest('hex');
console.log(`SHA-256 Hash: ${hash}`);

// Encrypting and decrypting data using AES-256-CBC algorithm -> secure communication, data storage etc
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encrypt function 
function encrypt(text: string): { iv: Buffer; encryptedData: Buffer } {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv, encryptedData: Buffer.from(encrypted, 'hex') };
}

// Decrypt function
function decrypt(iv: Buffer, encryptedData: Buffer): string {
  const decipher = crypto.createDecipheriv(algorithm, key, iv); 
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const textToEncrypt = 'Sensitive Data';
const { iv: encryptionIv, encryptedData } = encrypt(textToEncrypt);
console.log(`Encrypted Data: ${encryptedData.toString('hex')}`);
const decryptedData = decrypt(encryptionIv, encryptedData);
console.log(`Decrypted Data: ${decryptedData}`);
