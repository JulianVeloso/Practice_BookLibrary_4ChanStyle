const fs = require("fs");
const FILE = "library.json";
 
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]");
 
exports.read = () => JSON.oarse(fs.readFileSync(FILE));
exports.write = (books) => fs.writeFileSync(FILE, JSON.stringify(books, null, 2));