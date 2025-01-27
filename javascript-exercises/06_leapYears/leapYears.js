const leapYears = function(year) {
    let fourYear = (year % 4 === 0);
    let decade = (year % 100 === 0);
    let fourDecades = (year % 400 === 0)

    if(fourYear && (!decade || fourDecades)){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
