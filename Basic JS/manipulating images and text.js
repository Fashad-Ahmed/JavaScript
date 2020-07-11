// by clicking you wanna disable the picture
function bigo{
    var img = document.getElementById('imag');
    // img.className = 'hidden';
    img.className += ' hidden';
}

// If you want to add a class to an element, preserving its existing classes, you can do it. For
// example, suppose you have a paragraph with a class that styles it in Verdana, size 1 em. When
// the user mouses over it, you want to double its size to 2 em. But you don't want to lose the
// Verdana styling of its original class. Rather than replace the class that styles it in Verdana, you
// want to retain that class and add the class that enlarges the font.