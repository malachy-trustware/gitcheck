//javascript array filter method 
var filter = function(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
