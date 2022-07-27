const cipher = {
 
  cifrar: function (offset, text){
    
    
    
    let result = "";
    for (let i =0; i < text.length; i++) {
      let newText = (text.charCodeAt(i));
      if (newText >= 65 && newText <= 90){
        let inputText = (newText - 65 + offset) % 26 + 65;
        let inputNewText = String.fromCharCode(inputText);
        result += inputNewText;
      }

      else if (newText >= 97 && newText <= 122){
        let inputText = (newText - 97 + offset) % 26 + 97;
        let inputNewText = String.fromCharCode(inputText);
        result += inputNewText; 
        }
      
        else { 
          result += String.fromCharCode(newText); 
         
        }
      }

    return result;
    }



}
  

export default cipher;
