var city = prompt('enter city name : ');
var cityChange = city.toLowerCase ;

var cities = ['karachi','islamabad','peshawar',lahore]

for(i=0;i<cities.length;i++){
    if(cities[i] === cityChange){
    alert('city tracked');
    }
    else{
        alert('city not tracked');
    }
}
