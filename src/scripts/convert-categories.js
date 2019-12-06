const categories = require('../netflix-categories').NETFLIX_CATEGORIES;
const R = require('ramda');

function transform(o) {
    let k = Object.keys(o)[0];
    let value = o[k];
    // console.log("k = " + k);
    // console.log("value = " + value);
    return ({
        'category': k,
        'id': value
    })
}

const res = R.map(transform)(categories);

const json = JSON.stringify(res, null, 4);
console.log(json);
