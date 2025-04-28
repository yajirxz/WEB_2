function mensajeWhats() {
    // Obtener valores de los campos
    let name = document.getElementById('input1').value.trim();        // Nombre
    let email = document.getElementById('input2').value.trim();       // Correo
    let escuela = document.getElementById('input3').value.trim();     // Universidad
    let telefono = document.getElementById('input5').value.trim();    // Teléfono
    let mensaje = document.getElementById('input6').value.trim();     // Mensaje

    // Verifica que los campos no estén vacíos
    if (!telefono || !mensaje) {
        alert("Por favor ingresa el número de teléfono y el mensaje.");
        return;
    }

    // Personalizamos el mensaje
    const mensajePersonal = `Hola, ${name}. Tú Correo es: ${email}. ¿Está correcto?. ${mensaje}`;
    const mensajeCodificado = encodeURIComponent(mensajePersonal); 

    // URL de la API de WhatsApp 
    const reset = telefono.replace(/\D/g, '');
    const url = `https://api.whatsapp.com/send?phone=${reset}&text=${mensajeCodificado}`;

    // Abrir WhatsApp
    window.open(url, '_blank');

    // Generar QR con los datos concatenados
    const textoConcatenado = `${name},${email},${escuela},${reset},${mensaje}`;
    const qrApi = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

    const qrImg = document.createElement('img');
    qrImg.src = qrApi;
    qrImg.alt = 'Código QR';
    qrImg.classList.add('qr-code');

    // Limpiar div antes de agregar nuevo QR
    const qrDiv = document.getElementById('qr-code');
    qrDiv.innerHTML = '';
    qrDiv.appendChild(qrImg);
}