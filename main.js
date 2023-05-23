// Birthday setter
const myBday = new Date('2001-12-19');
let age = new Date(Date.now() - myBday.getTime()).getUTCFullYear();
age = Math.abs(age - 1970);
document.getElementById('age').innerHTML = age;
