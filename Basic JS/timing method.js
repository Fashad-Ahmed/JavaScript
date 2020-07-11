// setInterval ----> repeatitively running ----> 2args.----> 1arg : functin 1arg: time in mili sec
// setTimeOut -----> after sometime
 function timer()
 {
     console.log("running...");
 }
 setInterval(timer,1000)

 function timeout()
 {
     console.log("sleeping...");
 }

 setTimeout(timeout,3000)   // it runs after 3 sec

// way to stop setInterval

var count = 0;
var interval;
function timer()
{
    count++;
    console.log(count);
}
interval = setInterval(timer,1000)

// if we want to stop it after 5 sec

setTimeout(function(){
    clearInterval(interval)                 // ***
} , 5000)