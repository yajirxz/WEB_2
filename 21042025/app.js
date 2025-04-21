function generarQR(){
    let var1 = document.getElementById("input1").value.trim();
    let var2 = document.getElementById("input2").value.trim();
    let var3 = document.getElementById("input3").value.trim();
    let var4 = document.getElementById("input4").value.trim();
    var textoConcatenado = var1 + "," + var2 + "," + var3 + "," + var4;

    if (textoConcatenado === ",,") {
        alert("Por favor, complete al menos un campo.");
    }else{
        let qrApi= 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+encodeURIComponent(textoConcatenado);

        let qrImg= document.createElement('img');
        qrImg.src=qrApi
        qrImg.alt='QR Code';
        console.log(qrImg.src);

        qrImg.classList.add('qrCode');
        document.getElementById('qrCode').appendChild(qrImg);

    }
}