// GET REQUEST

let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json(); // in object form (parse)
    }).then((data) => {
        console.log(data);
    })
} 
getData();

// POST REQUEST
//  object needs to be stringify

function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"test","salary":"123","age":"23"}';
    parameter = {
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        // body: JSON.stringify(data);  if data is object
        body: data

    }
    fetch(url,parameter).then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data);
    })

//     fetch(url,parameter).then(response => response.json() )     // alternative method no return statement needed
//     .then(data => console.log(data);
//     )
// } 

postData();

