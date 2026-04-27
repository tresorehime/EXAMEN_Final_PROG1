import { log } from 'console';
import fs from 'fs';

const encodageImageToBase64 = path => {
    const data = fs.readFileSync(path);
    const base64 = data.toString('base64');
    return base64;
}
console.log(encodage("test.jpeg"));
