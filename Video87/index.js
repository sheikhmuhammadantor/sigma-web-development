import fs from 'fs';

// console.log(fs);

// fs.writeFileSync("antor.js", `import fs from 'fs';\n console.log(fs);`);

fs.writeFile("tolha.js", `import fs from 'fs';\n console.log(fs);`, (err) => {
    err && console.log('This is writeFile Error: ', err);

    // fs.readFile(`tolha.js`, (err, data) => {
    //     err && console.log(err);
    //     console.log(data.toString());
    // })
});

fs.appendFile('antor.js', `\nconsole.log('Hi, Tolha !');`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Append operation complete.');
        console.log('Data is undefined because appendFile does not return data.');
    }
})
