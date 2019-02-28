const firstData = document.getElementById("firstData");
const offset = document.getElementById("offset");
const result = document.getElementById ("result");

const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDescifrar");
btnCifrar.addEventListener("click",()=>{
    let texto= firstData.value;
    let llave = offset.value; 
    let resultado =cipher.encode(texto,llave);
  result.value=resultado;

});


btnDescifrar.addEventListener("click",()=>{
    let texto= firstData.value;
    let llave = offset.value; 
    let resultado =cipher.decode(texto,llave);
  result.value=resultado;

});
