const fs = require('fs');

// _data/age.yml
const myBday = new Date('2001-12-19');
let age = new Date(Date.now() - myBday.getTime()).getUTCFullYear();
age = Math.abs(age - 1970);
fs.writeFile("_data/age.yml", age.toString(), (err) => {
 if (err) throw err;
});


