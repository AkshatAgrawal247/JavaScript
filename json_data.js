//  JSON :- JAVASCRIPT OBJECT NOTATION
// it is basically in string format


// accessing data from json
// two mathods :- 
// 1. JSON.parse(data) method :- to parse a string data into a JS object.

let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.", "length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
// 1. JSON.stringify(js obj) method :- to parse a JS obj data into JSON.

let student  = {
    name: "akshat",
    marks: 95
};
let jsonres = JSON.stringify(student);
console.log(jsonres);


