import fs from "fs";

// fs stands for File System. It gives your Node.js program the ability to work with files, folders, and input/output streams.

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);

// fs.writeFileSync("hello.txt", "Hello World!");

// fs.readFileSync(0, "utf8");

// uses file descriptor 0, which represents standard input (stdin).
// So you're essentially saying:
// "Read everything that comes from the terminal input."

// fs
// │
// ├── File System module
// │
// ├── readFileSync()  → read
// ├── writeFileSync() → write
// ├── mkdirSync()     → create folder
// └── unlinkSync()    → delete file


