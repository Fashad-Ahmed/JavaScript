
var aka = 'through all the beams scorching beams';

var aka1 = aka.replace('beams' , 'rays');   // only first one is replaced

var aka2 = aka.replace(/beams/g , 'rays');   // all replaced

document.write(aka1);

document.write(aka2);