import path from 'path';
import { readFile } from 'fs/promises';
import os from 'os'
// path.resolve() returns the absolute path of the projects root directory without a forward slash at the end
// console.log(path.resolve('../hello/hello'))
// console.log(path.resolve('./hello/hello'))
// console.log(path.resolve('hello/hello'))

export const data = {
    data: await readFile(path.resolve('Test Data.json')).then(json => JSON.parse(json.toString())).catch(() => null),
    dir: path.resolve(),
    os: os.type
}
// export const data = await readFile(path.resolve('Test Data.json')).then(json => JSON.parse(json)).catch(() => null);

// console.log(JSON.stringify(data, undefined, 2));

// const arr = new Array(5);
// console.log('Array keys:', [...arr.keys()])

const nullCheck = (name, attr) => {
    return `${name} is ${attr.age} years old!`;
}

console.log(nullCheck('Akwasi', {age: null}));
