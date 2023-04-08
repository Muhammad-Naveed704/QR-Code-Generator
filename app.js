let image = document.querySelector(".image");
let qrImage = document.querySelector(".qrImage");
let qrText = document.querySelector(".qrText");



function QRgenerate(){
    if(qrText.value.length > 0){
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+qrText.value;
    image.classList.add("show-img");
    
}else {
    qrText.classList.add("error");
    setTimeout(()=>{
        qrText.classList.remove("error");

    },1000)
    
}
}

