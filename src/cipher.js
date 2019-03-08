window.cipher = {
  encode: (texto,offset) => {
    let resultado= ""; 
   function formula (x,llave,unicode) { //metodo retorno a  
    //(x-unicode+llave)%26+unicode
    let ascci= (x-unicode+llave)%26+unicode;
    let r=String.fromCharCode(ascci);
    return r;
   }
   for (let i =0;i<texto.length; i++) {
     let palabra= texto.charCodeAt(i);
  /*  codigo >=32 pero menor o igual 64 */
    if (palabra>=65 && palabra<=90) {
     resultado+=formula(palabra,offset,65);     
}
else if (palabra>=97 && palabra<=122){
resultado+=formula(palabra,offset,97);
}
else {
  resultado+=String.fromCharCode(palabra);
}

  console.log(resultado); /* Acá va tu código */
  }
  
 return resultado;
  },

  decode: (texto,offset) => {
    let resultado= ""; 
    function formula (x,llave,unicode) { //metodo retorno a  
     //(x-unicode+llave)%26+unicode
     let ascci= (x-unicode-25-llave)%26+unicode;
     let r=String.fromCharCode(ascci);
     return r;
    }
    for (let i =0;i<texto.length; i++) {
      let palabra= texto.charCodeAt(i);
   /*  codigo >=32 pero menor o igual 64 */
     if (palabra>=65 && palabra<=90) {
      resultado+=formula(palabra,offset,65);     
 }
 else if (palabra>=97 && palabra<=122){
 resultado+=formula(palabra,offset,97);
 }
 else {
   resultado+=String.fromCharCode(palabra);
 }
   
   
    }
  }
}
