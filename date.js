//jshint esversion:6
exports.getDate = function(){
let today = new Date();
let options = { 
    weekday: 'long',
     year: 'numeric', 
     month: 'long',
      day: 'numeric' };
return day = today.toLocaleDateString("en-US", options);

//    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//    console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
//    console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

}

module.exports.getDay = getDay;
var getDay = function() {
    let today = new Date();
    let options = { 
        weekday: 'long'
        };
    return day = today.toLocaleDateString("en-US", options);
    
    //    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //    console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    //    console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

    }