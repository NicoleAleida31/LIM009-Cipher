window.cipher = {
  encode: (texto,offset) => {
    let resultado= ""; 
   for (let i =0;i<texto.length; i++) {
     let palabra= texto.charCodeAt(i);
  /*  codigo >=32 pero menor o igual 64 */
    if (palabra>=65 && palabra<=90) {
     resultado+=String.fromCharCode((palabra-65+offset)%26+65);     
}
else if (palabra>=48 && palabra<=57) {
  resultado+=String.fromCharCode((palabra-48+offset)%10+48);     
}
else if (palabra>=97 && palabra<=122){
resultado+=String.fromCharCode((palabra-97+offset)%26+97);
}
else {
  resultado+=String.fromCharCode(palabra);
}
  }
  
 return resultado;
  },

  decode: (texto,offset) => {
    let resultado= "";
    let palabra="";
    for (let i =0;i<texto.length; i++) {
     palabra= texto.charCodeAt(i);
   /*  codigo >=32 pero menor o igual 64 */
     if (palabra>=65 && palabra<=90) {
      resultado+=String.fromCharCode((palabra-90-offset)%26+90);     
          } else if (palabra>=48 && palabra<=57) {
            resultado+=String.fromCharCode((palabra-57-offset)%10+57);     
          } else if (palabra>=97 && palabra<=122){
           resultado+=String.fromCharCode((palabra-122-offset)%26+122);
          }else {
            resultado+=String.fromCharCode(palabra);
 }
}
  return resultado;
},
}