const removeFromArray = function(array, ...valuesToremove) {
    return array.filter(item=> !valuesToremove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
