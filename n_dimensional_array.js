function flatten(array, result) {
    result === undefined && (result = []);
    
    for (var i = 0, len = array.length; i < len; i++) {
        if (Object.prototype.toString.call(array[i]) === '[object Array]') {
            flatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }
    
    return result;
}

console.log( flatten([1,2,3]) );
console.log( flatten([[1,2,3], ["a","b","c"], [1,2,3]]) );
console.log( flatten([[[1,2,3]]]) );


