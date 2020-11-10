// constructor syntax
// var promiseObj = new Promise(executor)

// http code stattus 200 true

function fun() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log('promise  resolved');
                resolve();
            }
            else {
                console.log('promise refused');
                reject('not fulfilled');
            }
        }, 2000)
    })
}

fun().then(function () {
    console.log('thanks')
}).catch(function () {
    console.log('sorry');
})