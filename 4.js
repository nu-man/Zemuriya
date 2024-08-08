function org(obj){
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
   
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = org(obj[i]);
        }
        return arrCopy;
    }

const objCopy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = org(obj[key]);
        }
    }
    return objCopy;
}

//test
const test={a:1,b:2,c:3}
const copy=org(test)
console.log("copy",copy);
console.log("original", test);


