console.log('ajax');
let fetchBtn = document.getElementById('fetchBtn');

const buttonClick = () => {
    console.log('fetch btn clicked!')
    // instantiation of xhr object
    const xhr = new XMLHttpRequest();

    // open object
    // xhr.open('GET','abc.txt',true); 
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true); 
    // post request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content','app/json');

    // on progress
    xhr.onprogress = function() {
        console.log('progress');
    }
    // response is ready
    xhr.onload = function () {
        if (this.status === 200) 
    {    console.log(this.responseText);}
    
    xhr.onreadystatechange = function () {
        console.log('ready to change',xhr.readyState);
        }
    }

    para = `{"name":"aabc","salary":123,"age":20}`;
    console.log(para);

    // send the request
    xhr.send();
}
fetchBtn.addEventListener('click',buttonClick);
