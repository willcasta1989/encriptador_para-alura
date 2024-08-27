
const encryptionMap = {
    'a': '2r',
    'e': '8nt',
    'i': '7m',
    'o': '1bv',
    'u': '4f'
};

const decryptionMap = {
    '2r': 'a',
    '8nt': 'e',
    '7m': 'i',
    '1bv': 'o',
    '4f': 'u'
};


function encryptText() {
    const inputText = document.getElementById("areaIngresoTexto").value;
    let encryptedText = inputText;

    for (const key in encryptionMap) {
        encryptedText = encryptedText.replace(new RegExp(key, 'g'), encryptionMap[key]);
    }

    document.getElementById("areaTextoSalida").value = encryptedText;
    document.getElementById("botonDesencriptar").disabled = false;
}


function decryptText() {
    const inputText = document.getElementById("areaTextoSalida").value;
    let decryptedText = inputText;

    for (const key in decryptionMap) {
        decryptedText = decryptedText.replace(new RegExp(key, 'g'), decryptionMap[key]);
    }

    document.getElementById("areaTextoSalida").value = decryptedText;
}


function copyText() {
    const outputText = document.getElementById("areaTextoSalida");
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    
}
