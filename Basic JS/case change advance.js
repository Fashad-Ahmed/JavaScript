var city = prompt('enter city name : ');

var fChar = city.slice(0,1);
var sChar = city.slice(1);

var f$ = fChar.toUpperCase();
var s$ = sChar.toLowerCase();

var cityChange = f$ + s$;

var cities = ['Karachi','Islamabad','Peshawar',Lahore,Quetta]

for(i=0;i<cities.length;i++){
    if(cities[i] === cityChange){
    alert('city tracked');
    }
    else{
        alert('city not tracked');
    }
}