function changeImage()
{
    var carR = document.getElementById('ca');
    carR.src = 'https://cdn.motor1.com/images/mgl/g6wem/s3/most-expensive-lead.jpg';
}

function out()
{
    var carR = document.getElementById('ca');
    carR.src = 'car.jpg';
}



// can cahnge link with same process but differ in terms of href



                // ALTERNATIVE

// <img src="car.jpg" id="ca" onmouseout="changeImage('ca','car.jpg')" onmouseover="changeImage('ca','car1.jpg')" alt="">

// function changeImage(id,src)
// {
//     var image = document.getElementById('ca');
//     image.src = src;    
// }