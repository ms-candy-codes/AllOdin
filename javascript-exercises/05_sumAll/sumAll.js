const sumAll = function(min, max) {
    if(min < 0 || max < 0){
        return "ERROR";
    }
    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    if(min > max){
        let holder = min;
        min = max;
        max = holder;
    }

    let add = 0;

    for(let j = min; j <= max; j++){
        add+=j;
    }
    return add;
};

// Do not edit below this line
module.exports = sumAll;
