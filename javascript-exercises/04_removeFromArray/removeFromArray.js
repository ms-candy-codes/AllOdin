const removeFromArray = function(arr, ...args) {
    let myArray = [];

    arr.forEach((myItems)=>{
        if(!args.includes(myItems)){
            myArray.push(myItems);
        }
    });
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
