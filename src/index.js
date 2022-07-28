import cipher from './cipher.js';

window.addEventListener("load", cesar, true);

function cesar(){
    /*document.getElementById("msjpcifrar").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true*/

    document.getElementById("cifrar").addEventListener("click",function(){
        let text = document.getElementById("msjpcifrar").value;
        let offset = document.getElementById("dropdown123").value;
        document.getElementById("msjpdescifrar").value = cipher.cifrar(offset, text);
    }, true)

    document.getElementById("descifrar").addEventListener("click",function(){
        let text2 = document.getElementById("msjpdescifrar").value;
        let offset2 = document.getElementById("dropdown123").value;
        document.getElementById("msjpcifrar").value = cipher.descifrar(offset2, text2);
    }, true);

    

}









