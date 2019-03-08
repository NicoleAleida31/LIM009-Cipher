const firstData = document.getElementById("firstData");
const offset = document.getElementById("offset");
const result = document.getElementById ("result");

const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDescifrar");
btnCifrar.addEventListener("click",()=>{
    
    let resultado =cipher.encode(firstData.value,parseInt(offset.value));
  result.value=resultado;

});


btnDescifrar.addEventListener("click",()=>{
    let resultado =cipher.decode(firstData.value,parseInt(offset.value));
  result.value=resultado;

});
