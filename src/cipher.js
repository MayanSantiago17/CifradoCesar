const cipher = {
 
  encode: function (offset, text){

    if(offset == "") throw (TypeError("ingrese un numero"));
    if(offset <= 0) throw (TypeError("ingrese un valor"));

    let newOffset=parseInt(offset)

    let result = "";

    for (let i =0; i < text.length; i++) {
      let newText = (text.charCodeAt(i));
      if (newText >= 65 && newText <= 90){
        let inputText = (newText - 65 + newOffset) % 26 + 65;
        let inputNewText = String.fromCharCode(inputText);
        result += inputNewText;
      } 
      else {if (newText >= 97 && newText <= 122){
        let inputText = (newText - 97 + newOffset) % 26 + 97;
        let inputNewText = String.fromCharCode(inputText);
        result += inputNewText; 
        } 
        else { 
          result += String.fromCharCode(newText); 
        }
      }
       
    }
    return result;
  },

  decode: function(offset2, text2) {

    if(offset2 == "") throw (TypeError("ingrese un numero"));
    if(offset2 <= 0) throw (TypeError("ingrese un valor"));

    let newOffset2=parseInt(offset2)

    let result2 = "";

    for (let i = 0; i < text2.length; i++) {
      let newText2 = (text2.charCodeAt(i));

      if (newText2 >= 65 && newText2 <= 90) {
        let inputText2 = String.fromCharCode((newText2 + 65 - newOffset2) % 26 + 65);
        result2 += inputText2;
      }

      else {if (newText2 >= 97 && newText2 <= 122) {
        let inputNewtext2 = String.fromCharCode((newText2 + 97 + newOffset2) % 26 + 97);
        result2 += inputNewtext2;
      }

      else {
        result2 += String.fromCharCode(newText2);

      }
      }
    }

    return result2;

  }

}
  

export default cipher;
