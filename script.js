
let qr;

function generateQR() {
    const text = document.getElementById("qrText").value;
    const color = document.getElementById("qrColor").value;
    const qrDiv = document.getElementById("qrcode");

    qrDiv.innerHTML = "";

    if (text === "") {
        alert("Entrez un texte ou un lien !");
        return;
    }

    qr = new QRCode(qrDiv, {
        text: text,
        width: 220,

        height: 220,
        colorDark: color,
        colorLight: "#ffffff"
    });
}

function downloadQR() {
    const img = document.querySelector("#qrcode img");
    if (!img) {
        alert("Générez d'abord un QR code !");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
}
