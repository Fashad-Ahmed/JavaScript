var cityToCheck = prompt('enter city name : ');
var cleanestCities = ['Karachi' , 'Islamabad' , 'Lahore','Peshawar' , 'Quetta']

var l$ = cleanestCities.length;

var matchFound = false;

for (var i = 0; i < l$; i++){
  if (cityToCheck === cleanestCities[i]) {
     matchFound = true;
    alert("It's one of the cleanest cities");
    break
      }
    }
    
if (matchFound === false) {
  alert("It's not on the list");
  }
