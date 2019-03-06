window.cipher = {
  encode: (texto,offset) => {
    //texto = Hola    llave ="2"
    /*
    -solo funciona abecedarios (26)
    -no funciona  en carcateres especiales ni en numeros
    - llave
    
    */
   let resultado="";

   /*
   -donde se detecta los caracteres y numeros
   - donde se detecta el abecedario pero en  mayuscula
   - ''''' pero en minuscula
   */
  //1paso recorrer
  for(let i=0;texto.length>i;i++){
    
    //validamos si el codigo unicode es un caracdter o numero
    if(texto.charCodeAt(i)>=32 &&texto.charCodeAt(i)<=64){
   /** aqui se ejcuta codigo */
     let ascciUnicode=texto.charCodeAt(i);
     let ascciChart=String.fromCharCode(ascciUnicode);
     resultado+=ascciChart;
    }
    
      /* 1.- minuscula , 2 mayuscula */
      else if(texto.charCodeAt(i)>=65 &&texto.charCodeAt(i)<=90){
        //letras en mayuscula 65
        let ascciUnicode=(texto.charCodeAt(i)-65+parseInt(offset))%26 +65;
        let ascciChart=String.fromCharCode(ascciUnicode);
        resultado+=ascciChart;

      }
        else if (texto.charCodeAt(i)>=97 &&texto.charCodeAt(i)<=122){
          //letras en minuscula
          let ascciUnicode=(texto.charCodeAt(i)-97+parseInt(offset))%26 +97;
          let ascciChart=String.fromCharCode(ascciUnicode);
          resultado+=ascciChart;
        }
      }

    return resultado;
   
  },
  decode: (texto,offset) =>{
    let resultado="";

    /*
    -donde se detecta los caracteres y numeros
    - donde se detecta el abecedario pero en  mayuscula
    - ''''' pero en minuscula
    */
   //1paso recorrer
   for(let i=0;texto.length>i;i++){

     //validamos si el codigo unicode es un caracdter o numero
    
     if(texto.charCodeAt(i)>=32 && texto.charCodeAt(i)<=64){
    /** aqui se ejcuta codigo */
      let ascciUnicode=texto.charCodeAt(i);
      let ascciChart=String.fromCharCode(ascciUnicode);
      resultado+=ascciChart;
     }
    
       /* 1.- minuscula , 2 mayuscula */
       else if(texto.charCodeAt(i)>=65 &&texto.charCodeAt(i)<=90){
         //letras en mayuscula 65  a
         let ascciUnicode=(texto.charCodeAt(i)-65-parseInt(offset))%26 + 65;
         let ascciChart=String.fromCharCode(ascciUnicode);
         resultado+=ascciChart;
 
       }
    
       
       else if(texto.charCodeAt(i)>=97 &&texto.charCodeAt(i)<=122){
           //letras en minuscula
           let ascciUnicode=(texto.charCodeAt(i)-97-parseInt(offset))%26 +97;
           let ascciChart=String.fromCharCode(ascciUnicode);
           resultado+=ascciChart;
         }
   
        }
        return resultado;
      }
    }
    


    









