// Build and read file paths using the path module
import path from 'path';

// Get the current directory name
const currentDir = path.dirname(__filename);
console.log(`Current Directory: ${currentDir}`);
// Output: Current Directory: /path/to/your/project/src

// Get the base name of the current file
const baseName = path.basename(__filename);
console.log(`Base Name: ${baseName}`);
// Output: Base Name: 04-path-module.ts

// Get the file extension of the current file
const fileExtension = path.extname(__filename);
console.log(`File Extension: ${fileExtension}`);
// Output: File Extension: .ts

// Join multiple path segments into a single path
const joinedPath = path.join(currentDir, 'subdir', 'file.txt');
console.log(`Joined Path: ${joinedPath}`);
// Output: Joined Path: /path/to/your/project/src/subdir/file.txt

// Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve(currentDir, 'subdir', 'file.txt');
console.log(`Resolved Path: ${resolvedPath}`);
// Output: Resolved Path: /path/to/your/project/src/subdir/file.txt

// Normalize a path, resolving '..' and '.' segments
const normalizedPath = path.normalize(joinedPath);
console.log(`Normalized Path: ${normalizedPath}`);
// Output: Normalized Path: /path/to/your/project/src/subdir/file.txt

// Parse a path into its components
const parsedPath = path.parse(joinedPath);
console.log(`Parsed Path: ${JSON.stringify(parsedPath, null, 2)}`);
// Output: Parsed Path: {
//   "root": "/",
//   "dir": "/path/to/your/project/src/subdir",
//   "base": "file.txt",
//   "name": "file",
//   "ext": ".txt"
// }

// Format a path object back into a string
const formattedPath = path.format(parsedPath);
console.log(`Formatted Path: ${formattedPath}`);
// Output: Formatted Path: /path/to/your/project/src/subdir/file.txt