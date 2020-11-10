let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

// fetch returns promise
function getData() {
    console.log('started');
    url = "https://rapidapi.com/collection/best-free-apis?utm_source=google&utm_medium=cpc&utm_campaign=Alpha_99560089589&utm_term=free%20api_e&gclid=CjwKCAiAkan9BRAqEiwAP9X6URuW1Cd9m_KX5rrOSBm0iwD-dnTpnjGe3TNa7YenvWX0YCX5cEzPIxoCdckQAvD_BwE";
    fetch(url).then((response) => {
        console.log('inside first then');
        return response.text();
    }).then((data) => {
        console.log('inside first then');
        console.log(data);
    })
} 
console.log('before running getData');
getData();
console.log('after running getData');
// fetch is asynchronous
