// Función para actualizar la imagen y el texto del contenedor
function upDate(previewPic) {
    console.log('upDate triggered');
    console.log('Alt text:', previewPic.alt);
    console.log('Source:', previewPic.src);

    // Actualizar el texto del div con id "image"
    document.getElementById('image').innerHTML = previewPic.alt;

    // Actualizar la imagen de fondo del div con id "image"
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

// Función para restaurar el estado original
function unDo() {
    console.log('unDo triggered');

    // Restaurar el texto del div con id "image"
    document.getElementById('image').innerHTML = 'Pase el ratón por encima de una imagen para mostrarla aquí';

    // Restaurar la imagen de fondo del div con id "image"
    document.getElementById('image').style.backgroundImage = 'url(\'\')';
}

// Obtener todas las imágenes con la clase "thumbnail"
const thumbnails = document.querySelectorAll('.thumbnail');

// Añadir los manejadores de eventos a cada imagen
thumbnails.forEach(img => {
    img.addEventListener('mouseover', () => upDate(img));
    img.addEventListener('mouseout', unDo);
});
